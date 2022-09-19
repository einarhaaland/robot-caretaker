'''
DESCRIPTION:
Script to help convert .xar files found /created in Choregraphe to .MOTION files that can be used by Webots.

REQUIREMENTS:
pip install beautifulsoup4
pip install lxlml

TO USE:
Paste path to xar file in global variable FILE_PATH
Adjust N_POSTITIONS to number of keyframes in animation
Run script
Needed output is printed to console
Timestamps of keyframes and headers are not included in output.

PROBLEMS:
Might be off by 1 index
'''

from bs4 import BeautifulSoup as bs

FILE_PATH = "C:/Users/einar/Desktop/excited.xar"
N_POSITIONS = 55

with open(FILE_PATH, "r") as file:
    content = file.readlines()
    content = "".join(content)
    bs_content = bs(content, "xml")

    # All tags where a joint is moved
    tags = bs_content.findAll("ActuatorCurve")

    # Populate result
    result = [ [] for i in range(N_POSITIONS) ]
    for i in range(N_POSITIONS):
        for j in range(len(tags)):
            result[i].append('*')

    for tag in tags:
        # All keyframes of a joint
        keyframes = list(tag.findAll("Key"))

        # The frame-numbers animation is performed on
        actionframes = []
        for frame in keyframes:
            actionframes.append(frame['frame'])
        
        for frame in keyframes:
            result[int(frame['frame'])][tags.index(tag)] = frame['value']

    print(result)
        