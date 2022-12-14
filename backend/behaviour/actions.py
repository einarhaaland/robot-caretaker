'''
This file contains functions for individual body movements.

Bending is front-to-back.
Tilt is side-to-side.

Extending / Contracting is handled by the same function, but with negative(?) input.

It is unclear if these function actually perform the action, 
or if they take in the robot type as an argument and returns the correct motors/joint to request.
'''

'''
Possible arguments to an action function can be

ARGS            EXAMPLES                    TYPE
Device          *The motor to move*         Unknown
DeviceName      "Left Wheel motor"          String
Power           3.4 (volt, watt ...)        Float
Speed           10.6                        Float
EndPosition     70.3                        Float
EndAngle        60.5                        Float

The current idea is to provide a universal interface with maximum capability so that all abstraction levels can be satisfied.
It is then up to the implementation to adapt to abstraction level of Robot API in question.

'''


########## HEAD ##########

def tilt_head():
    return

def nod_head():
    return 


########## FACE ##########

def smile():
    return

def frown():
    return

def scrunch():
    return

def raise_eyebrows():
    return

def tilt_eyebrows():
    return


########## SHOULDER ##########

def front_raise_left_shoulder():
    return

def front_raise_right_shoulder():
    return

def side_raise_left_shoulder():
    return

def side_raise_right_shoulder():
    return

def rotate_right_shoulder():
    return

def rotate_left_shoulder():
    return

def retract_right_shoulder(): # better/worse posture
    return

def retract_left_shoulder(): # better/worse posture
    return


########## ELBOW ##########

def bend_right_elbow():
    return

def bend_left_elbow():
    return


########## WRIST ##########

def bend_right_wrist():
    return

def bend_left_wrist():
    return

def tilt_right_wrist():
    return

def tilt_left_wrist():
    return

def rotate_right_wrist():
    return

def rotate_left_wrist():
    return


########## FINGER ##########

def curl_fingers_on_right_hand():
    return

def curl_fingers_on_left_hand():
    return

def bend_finger_on_right_hand(index):
    return

def bend_finger_on_left_hand(index):
    return


########## TORSO ##########

def bend_torso():
    return

def tilt_torso():
    return


########## HIP ##########

def bend_hip():
    return

def tilt_hip():
    return


########## LEG ##########

def front_raise_left_leg():
    return

def front_raise_right_leg():
    return

def side_raise_left_leg():
    return

def side_raise_right_leg():
    return

def rotate_right_leg():
    return

def rotate_left_leg():
    return


########## KNEE ##########

def bend_right_knee():
    return

def bend_left_knee():
    return


########## ANKLE ##########

def bend_right_ankle():
    return

def bend_left_ankle():
    return

def tilt_right_ankle():
    return

def tilt_left_ankle():
    return


########## TOE ##########

def curl_right_toes():
    return

def curl_left_toes():
    return