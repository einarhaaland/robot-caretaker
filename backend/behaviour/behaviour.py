import actions

'''
This file contains functions for compound body movements/moods consisting of many individual actions.

In the future, moods might be supplied/replaced by a spectrum of valence and arousal. 
The spectrum would be determining the sentiment and intensity of the mood displayed.
This would be implemented as arguments to the functions below.
'''


########## MOODS ########## TODO: Handle when an action is not supported by given robot
'''
If the functions in actions.py returns the motors need to be requested for each action for each robot,
the mood functions then need to contruct a request conforming to the robot in question's API.
'''

def default():
    # A default position for limbs, mood can still be displayed
    return

def excited():
    #nod_head()
    #smile()
    #raise_eyebrows()
    #tilt_eyebrows()

    #front_raise_right_shoulder()
    #front_raise_left_shoulder()
    #side_raise_right_shoulder()
    #side_raise_left_shoulder()

    #bend_right_elbow()
    #bend_left_elbow()

    #rotate_right_wrist()
    #rotate_left_wrist()

    #curl_fingers_on_right_hand()
    #curl_fingers_on_left_hand()

    #bend_torso()
    #bend_hip()
    return

def sad():
    #nod_head()
    #frown()
    #raise_eyebrows()
    #tilt_eyebrows()

    #front_raise_right_shoulder()
    #front_raise_left_shoulder()
    #side_raise_right_shoulder()
    #side_raise_left_shoulder()
    #rotate_left_shoulder()
    #rotate_right_shoulder()

    #rotate_right_wrist()
    #rotate_left_wrist()

    #curl_fingers_on_right_hand()
    #curl_fingers_on_left_hand()

    #bend_torso()
    #bend_hip()
    return

def frustrated():
    #nod_head()
    #frown()
    #raise_eyebrows()
    #tilt_eyebrows()

    #side_raise_right_shoulder()
    #side_raise_left_shoulder()
    #rotate_left_shoulder()
    #rotate_right_shoulder()

    #rotate_right_wrist()
    #rotate_left_wrist()

    #curl_fingers_on_right_hand()
    #curl_fingers_on_left_hand()

    #bend_torso()
    #bend_hip()
    return

def understanding():
    #nod_head()
    #tilt_head()
    #raise_eyebrows()
    #tilt_eyebrows()

    #side_raise_right_shoulder()
    #side_raise_left_shoulder()
    #rotate_left_shoulder()
    #rotate_right_shoulder()

    #rotate_right_wrist()
    #rotate_left_wrist()

    #curl_fingers_on_right_hand()
    #curl_fingers_on_left_hand()

    #bend_torso()
    #bend_hip()
    return

def excited_understanding():
    return
