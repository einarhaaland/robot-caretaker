'''
MOTION FUNCTIONS

A Motion Function is a python function that makes a robot do an animation.

On Motion Functions:
    * Contains Keyframes in which motors positions are set. 
    * Each Keyframe should use sync=True or motor_set_position_sync() ONCE to avoid async issues. Motions are skipped if not used.
    * The last keyframe resets all motors used in the motion to the default position.
    * You should also be able to adjust motor acceleration and more by using the Webots API.

Future Work: 
    * Motions should be created using a GUI / editor 
    * Motion functions should be generated after creating them in the GUI / editor
'''
def abstracted_wave(robot):
    # Keyframe 1
    move(robot, False, 1.49797, "Shoulder", "Pitch", "L")
    move(robot, True, -1.5, "Shoulder", "Pitch", "R")
    # Keyframe 2
    move(robot, True, 0.3, "Shoulder", "Roll", "R")
    # Keyframe 3
    move(robot, True, -0.5, "Shoulder", "Roll", "R")
    # Keyframe 4
    move(robot, True, 0.3, "Shoulder", "Roll", "R")
    # Keyframe 5
    move(robot, True, -0.5, "Shoulder", "Roll", "R")
    # Keyframe 6
    move(robot, True, 0, "Shoulder", "Roll", "R")
    # Reset motor positions
    move(robot, True, 1.5, "Shoulder", "Pitch", "R")

def wave(robot):
    # Keyframe 1
    robot.motors['LShoulderPitch'].setPosition(1.49797)
    robot.motor_set_position_sync(robot.motors['RShoulderPitch'], robot.sensors['RShoulderPitch'], -1.5, 250)
    # Keyframe 2
    robot.motor_set_position_sync(robot.motors['RShoulderRoll'], robot.sensors['RShoulderRoll'], 0.3, 250)
    # Keyframe 3
    robot.motor_set_position_sync(robot.motors['RShoulderRoll'], robot.sensors['RShoulderRoll'], -0.5, 250)
    # Keyframe 4
    robot.motor_set_position_sync(robot.motors['RShoulderRoll'], robot.sensors['RShoulderRoll'], 0.3, 250)
    # Keyframe 5
    robot.motor_set_position_sync(robot.motors['RShoulderRoll'], robot.sensors['RShoulderRoll'], -0.5, 250)
    # Keyframe 6
    robot.motor_set_position_sync(robot.motors['RShoulderRoll'], robot.sensors['RShoulderRoll'], 0, 250)
    # Reset motor positions
    robot.motor_set_position_sync(robot.motors['RShoulderPitch'], robot.sensors['RShoulderPitch'], 1.5, 250)
    
def nod(robot):
    # Keyframe 1
    robot.motor_set_position_sync(robot.motors['HeadPitch'], robot.sensors['HeadPitch'], 0, 250)
    # Keyframe 2
    robot.motor_set_position_sync(robot.motors['HeadPitch'], robot.sensors['HeadPitch'], 0.5, 250)
    # Keyframe 3
    robot.motor_set_position_sync(robot.motors['HeadPitch'], robot.sensors['HeadPitch'], -0.5, 250)
    # Keyframe 4
    robot.motor_set_position_sync(robot.motors['HeadPitch'], robot.sensors['HeadPitch'], 0.5, 250)
    # Keyframe 5
    robot.motor_set_position_sync(robot.motors['HeadPitch'], robot.sensors['HeadPitch'], -0.5, 250)
    # Keyframe 6
    robot.motor_set_position_sync(robot.motors['HeadPitch'], robot.sensors['HeadPitch'], 0.5, 250)
    # Reset motor positions
    robot.motor_set_position_sync(robot.motors['HeadPitch'], robot.sensors['HeadPitch'], 0, 250)

def shakeHead(robot):
    # Keyframe 1
    robot.motor_set_position_sync(robot.motors['HeadYaw'], robot.sensors['HeadYaw'], 0, 250)
    # Keyframe 2
    robot.motor_set_position_sync(robot.motors['HeadYaw'], robot.sensors['HeadYaw'], 0.5, 250)
    # Keyframe 3
    robot.motor_set_position_sync(robot.motors['HeadYaw'], robot.sensors['HeadYaw'], -0.5, 250)
    # Keyframe 4
    robot.motor_set_position_sync(robot.motors['HeadYaw'], robot.sensors['HeadYaw'], 0.5, 250)
    # Keyframe 5
    robot.motor_set_position_sync(robot.motors['HeadYaw'], robot.sensors['HeadYaw'], -0.5, 250)
    # Keyframe 6
    robot.motor_set_position_sync(robot.motors['HeadYaw'], robot.sensors['HeadYaw'], 0.5, 250)
    # Reset motor positions
    robot.motor_set_position_sync(robot.motors['HeadYaw'], robot.sensors['HeadYaw'], 0, 250)

def cheer(robot):
    # Keyframe 1
    robot.motors['HeadPitch'].setPosition(0.4)
    robot.motors['LShoulderPitch'].setPosition(-1.5)
    robot.motors['RShoulderPitch'].setPosition(-1.5)
    robot.motors['LHipPitch'].setPosition(-0.2)
    robot.motors['RHipPitch'].setPosition(-0.2)
    robot.motors['LKneePitch'].setPosition(0.5)
    robot.motors['RKneePitch'].setPosition(0.5)
    robot.motors['LAnklePitch'].setPosition(-0.25)
    robot.motors['RAnklePitch'].setPosition(-0.25)
    robot.motors['LElbowRoll'].setPosition(-0.5)
    robot.motor_set_position_sync(robot.motors['RElbowRoll'], robot.sensors['RElbowRoll'], 0.5, 250)
    # Keyframe 2
    robot.motors['HeadPitch'].setPosition(-0.2)
    robot.motors['LHipPitch'].setPosition(0)
    robot.motors['RHipPitch'].setPosition(0)
    robot.motors['LKneePitch'].setPosition(0)
    robot.motors['RKneePitch'].setPosition(0)
    robot.motors['LAnklePitch'].setPosition(0)
    robot.motors['RAnklePitch'].setPosition(0)
    robot.motors['LElbowRoll'].setPosition(0)
    robot.motor_set_position_sync(robot.motors['RElbowRoll'], robot.sensors['RElbowRoll'], 0, 250)
    # Keyframe 3
    robot.motors['HeadPitch'].setPosition(0.4)
    robot.motors['LHipPitch'].setPosition(-0.2)
    robot.motors['RHipPitch'].setPosition(-0.2)
    robot.motors['LKneePitch'].setPosition(0.5)
    robot.motors['RKneePitch'].setPosition(0.5)
    robot.motors['LAnklePitch'].setPosition(-0.25)
    robot.motors['RAnklePitch'].setPosition(-0.25)
    robot.motors['LElbowRoll'].setPosition(-0.5)
    robot.motor_set_position_sync(robot.motors['RElbowRoll'], robot.sensors['RElbowRoll'], 0.5, 250)
    # Keyframe 4
    robot.motors['HeadPitch'].setPosition(-0.2)
    robot.motors['LHipPitch'].setPosition(0)
    robot.motors['RHipPitch'].setPosition(0)
    robot.motors['LKneePitch'].setPosition(0)
    robot.motors['RKneePitch'].setPosition(0)
    robot.motors['LAnklePitch'].setPosition(0)
    robot.motors['RAnklePitch'].setPosition(0)
    robot.motors['LElbowRoll'].setPosition(0)
    robot.motor_set_position_sync(robot.motors['RElbowRoll'], robot.sensors['RElbowRoll'], 0, 250)
    # Keyframe 5
    robot.motors['HeadPitch'].setPosition(0.4)
    robot.motors['LHipPitch'].setPosition(-0.2)
    robot.motors['RHipPitch'].setPosition(-0.2)
    robot.motors['LKneePitch'].setPosition(0.5)
    robot.motors['RKneePitch'].setPosition(0.5)
    robot.motors['LAnklePitch'].setPosition(-0.25)
    robot.motors['RAnklePitch'].setPosition(-0.25)
    robot.motors['LElbowRoll'].setPosition(-0.5)
    robot.motor_set_position_sync(robot.motors['RElbowRoll'], robot.sensors['RElbowRoll'], 0.5, 250)
    # Keyframe 6
    robot.motors['HeadPitch'].setPosition(-0.2)
    robot.motors['LHipPitch'].setPosition(0)
    robot.motors['RHipPitch'].setPosition(0)
    robot.motors['LKneePitch'].setPosition(0)
    robot.motors['RKneePitch'].setPosition(0)
    robot.motors['LAnklePitch'].setPosition(0)
    robot.motors['RAnklePitch'].setPosition(0)
    robot.motors['LElbowRoll'].setPosition(0)
    robot.motor_set_position_sync(robot.motors['RElbowRoll'], robot.sensors['RElbowRoll'], 0, 250)
    # Keyframe 7
    robot.motors['HeadPitch'].setPosition(0.4)
    robot.motors['LHipPitch'].setPosition(-0.2)
    robot.motors['RHipPitch'].setPosition(-0.2)
    robot.motors['LKneePitch'].setPosition(0.5)
    robot.motors['RKneePitch'].setPosition(0.5)
    robot.motors['LAnklePitch'].setPosition(-0.25)
    robot.motors['RAnklePitch'].setPosition(-0.25)
    robot.motors['LElbowRoll'].setPosition(-0.5)
    robot.motor_set_position_sync(robot.motors['RElbowRoll'], robot.sensors['RElbowRoll'], 0.5, 250)
    # Reset motor positions
    robot.motors['HeadPitch'].setPosition(0)
    robot.motors['LShoulderPitch'].setPosition(1.5)
    robot.motors['RShoulderPitch'].setPosition(1.5)
    robot.motors['LHipPitch'].setPosition(0)
    robot.motors['RHipPitch'].setPosition(0)
    robot.motors['LKneePitch'].setPosition(0)
    robot.motors['RKneePitch'].setPosition(0)
    robot.motors['LAnklePitch'].setPosition(0)
    robot.motors['RAnklePitch'].setPosition(0)
    robot.motors['LElbowRoll'].setPosition(0)
    robot.motor_set_position_sync(robot.motors['RElbowRoll'], robot.sensors['RElbowRoll'], 0, 250)
    
def thinking(robot):
    # Keyframe 1
    robot.motors['LElbowRoll'].setPosition(-1.2)
    robot.motors['LWristYaw'].setPosition(-1.5)
    robot.motors['HeadYaw'].setPosition(-0.5)
    robot.motors['HeadPitch'].setPosition(0.5)
    robot.motor_set_position_sync(robot.motors['LShoulderPitch'], robot.sensors['LShoulderPitch'], -1.5, 250)
    # Keyframe 2
    robot.motor_set_position_sync(robot.motors['LShoulderPitch'], robot.sensors['LShoulderPitch'], -1, 250)
    # Keyframe 3
    robot.motor_set_position_sync(robot.motors['LShoulderPitch'], robot.sensors['LShoulderPitch'], -1.5, 250)
    # Keyframe 4
    robot.motor_set_position_sync(robot.motors['LShoulderPitch'], robot.sensors['LShoulderPitch'], -1, 250)
    # Keyframe 5
    robot.motor_set_position_sync(robot.motors['LShoulderPitch'], robot.sensors['LShoulderPitch'], -1.5, 250)
    # Keyframe 6
    robot.motor_set_position_sync(robot.motors['LShoulderPitch'], robot.sensors['LShoulderPitch'], -1, 250)
    # Reset motor positions
    robot.motors['LElbowRoll'].setPosition(0)
    robot.motors['LWristYaw'].setPosition(0)
    robot.motors['HeadYaw'].setPosition(0)
    robot.motors['HeadPitch'].setPosition(0)
    robot.motor_set_position_sync(robot.motors['LShoulderPitch'], robot.sensors['LShoulderPitch'], 1.5, 250)



'''
This function abstracts the syntax required to create motion functions, allowing more non-experts to create motion functions.

Arguments are represented with strings instead of enums to avoid extra syntax for non-coders.

Arguments "acceleration" and "speed" are not used. You should be able to use the webots API to enable them.
'''
def move(robot, sync, position, joint, rotation='', side='', delay=250, acceleration=None, speed=None):
    '''
    Moves the specified joint.

    ARGS:
        * robot       (robot):                       The robot to move the joint.
        * sync        (True or False):               Whether this motion is the last motion in the current keyframe.
        * position    (float):                       What position to move the joint to.
        * joint       (string):                      The joint to move ("Shoulder", "Ankle"...)
        * rotation    ("Roll", "Pitch" or "Yaw"):    Which rotation to apply to joint. (Optional)
        * side        ("R" or "L"):                  Which of the left or right joint to move. (Optional)
        * delay       (integer):                     The delay before moving on to next instruction. (Optional)
        * acceleration(float):                       Max acceleration of joint. (Optional) (Not Used)
        * speed       (float):                       Max speed of joint. (Optional) (Not Used)
    '''
    if side in ('R', 'L'):
        motor = side
    elif side != '':
        raise Exception("Argument 'side' should be 'R' or 'L' or not specified...")
    else:
        motor = ''

    motor += joint

    if rotation in ('Roll', 'Pitch', 'Yaw'):
        motor += rotation
    elif rotation != '':
        raise Exception("Argument 'rotation' should be 'Roll' or 'Pitch' or 'Yaw' or not specified...")
    
    try:
        if not sync:
            robot.motors[motor].setPosition(position)
        else:
            robot.motor_set_position_sync(robot.motors[motor], robot.sensors[motor], position, delay)
    except:
        raise Exception(f'Wrong args. Your args resulted in trying to move "{motor}"...')

