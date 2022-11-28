'''
This controller listens for incomming messages and accesses motors to perform the given animation / instruction.
'''
import sys
import os
import threading
import json
import yaml
import Levenshtein
import motion_functions
from controller import Robot, Motor

# import supercontroller
controller_path = os.path.join(os.getcwd(), os.pardir)
sys.path.insert(0, controller_path)
from super_controller import SuperController


class NaoMotorController(SuperController):
    '''
    Motor controller.
    Sub class of ../Controller.py
    '''

    # Constructor
    def __init__(self, config):
        self.config = config
        self.instruction = ''
        super().__init__(config)

    # Callback when receiving message through messaging system
    def messageCallback(self, channel, method, properties, body):
        body = json.loads(body)
        if 'instruction' in body:
            self.instruction = self.findMatchingMotionFunction(body['instruction'])
        else:
            self.createNewMotion(body)

    def findMatchingMotionFunction(self, s):
        '''
        Finds the closest matching motion-function to match argument using Levenshtein.
        Returns None if minimum edit distance found is >= 5

        ARGS:
            s (str): The string to match on

        RETURNS:
            The name of the closest matching motion-function
        '''

        def getMotionFunctions():
            '''Returns a list of all motion-functions available in motion_functions.py'''
            return [motion_function for motion_function in dir(motion_functions) if not motion_function.startswith('__')]

        func_list = getMotionFunctions()
        min_edit_distance = 5 # The maximum distance allowed
        closest_match = None
        for func in func_list:
            edit_distance = Levenshtein.distance(s, func)
            if  edit_distance < min_edit_distance:
                min_edit_distance = edit_distance
                closest_match = func
        return closest_match

        def createNewMotion(body):
            '''Creates a new motion function in motion_functions.py from an RML JSON body'''

            # Check if name already exists
            existing = getMotionFunctions()
            if body['def'] in existing:
                print("A motion function with the same name already exist, please change the name")
                return

            # Open file
            with open("motion_functions.py" as f):
                # Write to file
                f.write('\n')

                # define function
                f.write(f"def {body['def']}:\n")

                # Function Content
                for cmd in body['commands']:
                    f.write("\t# Keyframe\n")
                    if 'repeat' in cmd:
                        pass
                    else if 'multimove' in cmd:
                        for i in range(len(cmd['multimove'])):
                            sync = True if i+1 == len(cmd['multimove']) else False
                            pos = cmd['multimove'][i]['position']
                            joint = cmd['multimove'][i]['joint'].capitalize()
                            side = cmd['multimove'][i]['side'][0].capitalize() if 'side' in cmd['multimove'][i] else ''
                            rot = cmd['multimove'][i]['rotation'] if 'rotation' in cmd['multimove'][i] else ''
                            f.write(f"\tmove(robot, {sync}, {pos}, {joint}, {rot}, {side})\n")
                    else if 'move' in cmd:
                        pos = cmd['position']
                        joint = cmd['joint'].capitalize()
                        side = cmd['side'][0].capitalize() if 'side' in cmd else ''
                        rot = cmd['rotation'] if 'rotation' in cmd else ''
                        f.write(f"\tmove(robot, True, {pos}, {joint}, {rot}, {side})\n")


            

    # Controller loop
    def run(self):
        while True:
            if self.instruction == '':
                pass
            elif self.instruction is None:
                print("Could not find matching motion, please check spelling of MoodCard..")
            else:
                print(f'Performing motion "{self.instruction}"')
                eval("motion_functions." + self.instruction + "(self)") # See issue #33 for safer use (should not be needed because only existing motion-functions are executed)
            
            self.instruction = ''

            # Break simulation (https://cyberbotics.com/doc/reference/robot#wb_robot_step)
            if nao.step(self.timeStep) == -1:
                break

            
# Read config.yaml
with open('config.yaml') as f:
  config = yaml.safe_load(f)

# Init robotcontroller
nao = NaoMotorController(config)

# Create threads
controller_thread = threading.Thread(target=nao.run)
message_listener_thread = threading.Thread(target=nao.subscriber.listener)

# Run threads
controller_thread.start()
message_listener_thread.start()

