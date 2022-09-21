'''
README!

DESCRIPTION:
Script to help convert .xar files found /created in Choregraphe to .MOTION files that can be used by Webots.

REQUIREMENTS:
Python
pip install beautifulsoup4
pip install lxlml

TO USE:
* Set Global Variables:
    * Set FILE_PATH to path to xar file
    * Set N_POSTITIONS to number of keyframes in animation
    * Set D_TIME to desired time between keyframes
* Run script
* Copy output from terminal into a raw text file and save as <filename>.motion
* Can be tested in nao_demo_python.py controller in Webots

PROBLEMS:
* LHand and RHand will not work due to being implemented as "phalanx" in Webots. See robot controller Nao_demo_python.py in Webots for more info.
* Motion file does not seem to work correctly even though format seems correct. Only 1 or 2 joints move as expected, and a joint move after motion is over.
'''

from bs4 import BeautifulSoup as bs
import datetime
import math

FILE_PATH = "C:/Users/einar/Desktop/excited.xar"
N_POSITIONS = 55
D_TIME = datetime.timedelta(milliseconds=700)

with open(FILE_PATH, "r") as file:
    # Read file
    content = file.readlines()
    content = "".join(content)

    # Init BeautifulSoup4
    bs_content = bs(content, "xml")

    # Keeps track of keyframe-time, starts at 00:00:000
    time = datetime.datetime(1,1,1,minute=0, second=0, microsecond=0)

    # Top of .motion file, describes version and joints to be moved
    header = ['#WEBOTS_MOTION','V1.0']

    # All xml-tags where a joint is moved
    tags = bs_content.findAll("ActuatorCurve")

    # Populate result
    result = [ [] for i in range(N_POSITIONS) ]
    for i in range(N_POSITIONS):

        # Add keyframe time
        result[i].append(time.strftime('%M:%S:%f')[:-3])
        time += D_TIME

        # Add Pose-number
        result[i].append("Pose"+str(i+1)) # Poses start at 1

        # Populate with *, some to be replaced with values later
        for j in range(len(tags)):
            result[i].append('0')

    for tag in tags:
        # Populate .motion header
        header.append(tag['actuator'])

        # All keyframes of a joint
        keyframes = list(tag.findAll("Key"))
        
        # Add values to result
        for frame in keyframes:
            # Input is degrees, ouput is radians. Index + 2 because [time, pose, i+2, ...]
            result[int(frame['frame'])][tags.index(tag)+2] = str(math.radians(float(frame['value'])))

    # Print result
    print(','.join(header))
    for elem in result:
        print(','.join(elem))
        