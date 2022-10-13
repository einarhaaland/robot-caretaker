'''
MOTION-FUNCTIONS

A Motion-Function is a python function that makes a robot do an animation.

On Motion-Functions:
    * Contains Keyframes in which motors positions are set. 
    * Each Keyframe should use motor_set_position_sync() ONCE to avoid async issues. Motions are skipped if not used.
    * The last keyframe resets all motors used in the motion to the default position.
    * You should also be able to adjust motor acceleration and more by using the Webots API.

Future Work: 
    * Motion functions should be generated along with robot.run()
    * Motions should be created using an editor 
'''

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