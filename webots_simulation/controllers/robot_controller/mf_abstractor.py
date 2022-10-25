'''
This file is intended to further abstract motion-functions, allowing more non-experts to create motion functions.

If a function does not describe the joint of your robot correctly, please make your own function:
    SCENARIO:
        * The Pepper robot does not have two hip joints. 
        * Taking "side" as an argument therefore does not make sense.
        * Make function def torso() that takes different arguments.

If you feel a function is not detailed enough to describe your robot's joint, feel free to expand function:
    SCENARIO:
        * Your robot can not only curl its fingers, but also spread them.
        * The function then needs a "rotation" argument that is either "pitch" or "yaw" (curl or spread)
        * Add this functionality in the already existing function.

Arguments are represented with strings instead of enums to avoid extra syntax for non-coders.

Optional arguments are currently not used.
'''


def head(robot, rotation, position, sync, acceleration=None, speed=None, delay=250):
    '''
    Moves the Head joint.

    ARGS:
        robot       (robot):                       The robot to move the joint.
        side        ("R" or "L"):                  Which of the left or right joint to move.
        rotation    ("Roll", "Pitch" or "Yaw"):    Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.
        sync        (True or False):               Whether this motion is the last motion in the current keyframe.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    if rotation in ('Roll', 'Pitch', 'Yaw'):
        motor_name = "Head" + rotation
    else:
        raise Exception('"rotation" argument should be "Roll" or "Pitch" or "Yaw" (case sensitive)')
    
    if not sync:
        robot.motors[motor_name].setPosition(position)
    else:
        robot.motor_set_position_sync(robot.motors[motor_name], robot.sensors[motor_name], position, delay)


def shoulder(robot, side, rotation, position, sync, acceleration=None, speed=None, delay=250):
    '''
    Moves a Shoulder joint.

    ARGS:
        robot       (robot):                       The robot to move the joint.
        side        ("R" or "L"):                  Which of the left or right joint to move.
        rotation    ("Roll" or "Pitch"):           Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.
        sync        (True or False):               Whether this motion is the last motion in the current keyframe.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    if side in ('R', 'L'):
        motor_name = side
    else:
        raise Exception('"side" argument should be "R" or "L" (case sensitive)')

    motor_name += "Shoulder"

    if rotation in ('Roll', 'Pitch', 'Yaw'):
        motor_name += rotation
    else:
        raise Exception('"rotation" argument should be "Roll" or "Pitch" or "Yaw" (case sensitive)')
    
    if not sync:
        robot.motors[motor_name].setPosition(position)
    else:
        robot.motor_set_position_sync(robot.motors[motor_name], robot.sensors[motor_name], position, delay)


def elbow(robot, side, rotation, position, sync, acceleration=None, speed=None, delay=250):
    '''
    Moves an ankle joint.

    ARGS:
        robot       (robot):                       The robot to move the joint.
        side        ("R" or "L"):                  Which of the left or right joint to move.
        rotation    ("Roll" or "Yaw"):             Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.
        sync        (True or False):               Whether this motion is the last motion in the current keyframe.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    if side in ('R', 'L'):
        motor_name = side
    else:
        raise Exception('"side" argument should be "R" or "L" (case sensitive)')

    motor_name += "Elbow"

    if rotation in ('Roll', 'Pitch', 'Yaw'):
        motor_name += rotation
    else:
        raise Exception('"rotation" argument should be "Roll" or "Pitch" or "Yaw" (case sensitive)')
    
    if not sync:
        robot.motors[motor_name].setPosition(position)
    else:
        robot.motor_set_position_sync(robot.motors[motor_name], robot.sensors[motor_name], position, delay)


def wrist(robot, side, rotation, position, sync, acceleration=None, speed=None, delay=250):
    '''
    Moves an ankle joint.

    ARGS:
        robot       (robot):                       The robot to move the joint.
        side        ("R" or "L"):                  Which of the left or right joint to move.
        rotation    ("Roll", "Pitch" or "Yaw"):    Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.
        sync        (True or False):               Whether this motion is the last motion in the current keyframe.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    if side in ('R', 'L'):
        motor_name = side
    else:
        raise Exception('"side" argument should be "R" or "L" (case sensitive)')

    motor_name += "Wrist"

    if rotation in ('Roll', 'Pitch', 'Yaw'):
        motor_name += rotation
    else:
        raise Exception('"rotation" argument should be "Roll" or "Pitch" or "Yaw" (case sensitive)')
    
    if not sync:
        robot.motors[motor_name].setPosition(position)
    else:
        robot.motor_set_position_sync(robot.motors[motor_name], robot.sensors[motor_name], position, delay)


def hip(robot, side, rotation, position, sync, acceleration=None, speed=None, delay=250):
    '''
    Moves an ankle joint.

    ARGS:
        robot       (robot):                       The robot to move the joint.
        side        ("R" or "L"):                  Which of the left or right joint to move.
        rotation    ("Roll", "Pitch" or "Yaw"):    Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.
        sync        (True or False):               Whether this motion is the last motion in the current keyframe.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    if side in ('R', 'L'):
        motor_name = side
    else:
        raise Exception('"side" argument should be "R" or "L" (case sensitive)')

    motor_name += "Hip"

    if rotation in ('Roll', 'Pitch', 'Yaw'):
        motor_name += rotation
    else:
        raise Exception('"rotation" argument should be "Roll" or "Pitch" or "Yaw" (case sensitive)')
    
    if not sync:
        robot.motors[motor_name].setPosition(position)
    else:
        robot.motor_set_position_sync(robot.motors[motor_name], robot.sensors[motor_name], position, delay)


def knee(robot, side, position, sync, acceleration=None, speed=None, delay=250):
    '''
    Moves an ankle joint.

    ARGS:
        robot       (robot):                       The robot to move the joint.
        side        ("R" or "L"):                  Which of the left or right joint to move.
        position    (float):                       What position to move the joint to.
        sync        (True or False):               Whether this motion is the last motion in the current keyframe.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    if side in ('R', 'L'):
        motor_name = side
    else:
        raise Exception('"side" argument should be "R" or "L" (case sensitive)')

    motor_name += "KneePitch"
    
    if not sync:
        robot.motors[motor_name].setPosition(position)
    else:
        robot.motor_set_position_sync(robot.motors[motor_name], robot.sensors[motor_name], position, delay)
    pass

def ankle(robot, side, rotation, position, sync, acceleration=None, speed=None, delay=250):
    '''
    Moves an ankle joint.

    ARGS:
        robot       (robot):                       The robot to move the joint.
        side        ("R" or "L"):                  Which of the left or right joint to move.
        rotation    ("Roll", "Pitch" or "Yaw"):    Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.
        sync        (True or False):               Whether this motion is the last motion in the current keyframe.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    if side in ('R', 'L'):
        motor_name = side
    else:
        raise Exception('"side" argument should be "R" or "L" (case sensitive)')

    motor_name += "Ankle"

    if rotation in ('Roll', 'Pitch', 'Yaw'):
        motor_name += rotation
    else:
        raise Exception('"rotation" argument should be "Roll" or "Pitch" or "Yaw" (case sensitive)')
    
    if not sync:
        robot.motors['LShoulderPitch'].setPosition(1.49797)
    else:
        robot.motor_set_position_sync(robot.motors[motor_name], robot.sensors[motor_name], position, delay)


def move(robot, joint, side, rotation, position, sync, acceleration=None, speed=None, delay=250):
    '''
    Moves the specified joint.

    ARGS:
        robot       (robot):                       The robot to move the joint.
        joint       (string):                      The joint to move (Shoulder, Ankle...)
        side        ("R" or "L"):                  Which of the left or right joint to move.
        rotation    ("Roll", "Pitch" or "Yaw"):    Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.
        sync        (True or False):               Whether this motion is the last motion in the current keyframe.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    if side in ('R', 'L'):
        motor_name = side
    else:
        raise Exception('"side" argument should be "R" or "L" (case sensitive)')

    motor_name += joint

    if rotation in ('Roll', 'Pitch', 'Yaw'):
        motor_name += rotation
    
    try:
        if not sync:
            robot.motors[motor_name].setPosition(position)
        else:
            robot.motor_set_position_sync(robot.motors[motor_name], robot.sensors[motor_name], position, delay)
    except:
        raise Exception('Please ensure your given arguments are correct')

