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
'''

def head(rotation, position, acceleration=None, speed=None, delay=None):
    '''
    Moves the head joint.

    ARGS:
        rotation    ("roll", "pitch" or "yaw"):    Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    pass

def shoulder(side, rotation, position, acceleration=None, speed=None, delay=None):
    '''
    Moves a shoulder joint.

    ARGS:
        side        ("right" or "left"):           Which of the joints to move.
        rotation    ("roll" or "pitch"):           Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    pass

def elbow(side, rotation, position, acceleration=None, speed=None, delay=None):
    '''
    Moves an elbow joint.

    ARGS:
        side        ("right" or "left"):           Which of the joints to move.
        rotation    ("roll" or "yaw"):             Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    pass

def wrist(side, rotation, position, acceleration=None, speed=None, delay=None):
    '''
    Moves a wrist joint.

    ARGS:
        side        ("right" or "left"):           Which of the joints to move.
        rotation    ("roll", "pitch" or "yaw"):    Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    pass

def finger(side, position, acceleration=None, speed=None, delay=None):
    '''
    Moves a finger joint.

    ARGS:
        side        ("right" or "left"):           Which of the joints to move.
        position    (float):                       What position to move the joint to.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    pass

def hip(side, rotation, position, acceleration=None, speed=None, delay=None):
    '''
    Moves a hip joint.

    ARGS:
        side        ("right" or "left"):           Which of the joints to move.
        rotation    ("roll", "pitch" or "yaw"):    Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    pass

def knee(side, position, acceleration=None, speed=None, delay=None):
    '''
    Moves a knee joint.

    ARGS:
        side        ("right" or "left"):           Which of the joints to move.
        position    (float):                       What position to move the joint to.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    pass

def ankle(side, rotation, position, acceleration=None, speed=None, delay=None):
    '''
    Moves an ankle joint.

    ARGS:
        side        ("right" or "left"):           Which of the joints to move.
        rotation    ("roll", "pitch" or "yaw"):    Which rotation to apply to joint.
        position    (float):                       What position to move the joint to.

    OPTIONAL ARGS:
        acceleration    (float):                   Max acceleration of joint.
        speed           (float):                   Max speed of joint.
        delay           (integer):                 The delay before moving on to next instruction.
    '''
    pass

