import motion_functions

def getMotionFunctions():
    '''Returns a list of all motion-functions available in motion_functions.py'''
    return [motion_function for motion_function in dir(motion_functions) if not motion_function.startswith('__')]

def createNewMotion(body):
    '''Creates a new motion function in motion_functions.py from an RML JSON body'''

    # Check if name already exists
    existing = getMotionFunctions()
    if body['def'] in existing:
        print("Writing new motion: function name already exists, motion will not be created..")
        return

    # Open file
    with open("motion_functions.py", "a") as f:
        ## Functions for writing to the file
        def writeNewKeyframe():
            f.write("\t# Keyframe\n")

        def writeMove(move, sync):
            pos = move['position']
            joint = move['joint'].capitalize()
            side = move['side'][0].capitalize() if 'side' in move else ''
            rot = move['rotation'].capitalize() if 'rotation' in move else ''
            f.write(f"\tmove(robot, {sync}, {pos}, '{joint}', '{rot}', '{side}')\n")

        def writeMultimove(multi):
            for i in range(len(multi)):
                if i+1 == len(multi):
                    writeMove(multi[i]['move'], True)
                else:
                    writeMove(multi[i]['move'], False)

        def writeRepeat(repeat, amount):
            for i in range(amount):
                writeNewKeyframe()
                for cmd_to_repeat in repeat:
                    if 'multimove' in cmd_to_repeat:
                        writeMultimove(cmd_to_repeat['multimove'])
                    elif 'move' in cmd_to_repeat:
                        writeMove(cmd_to_repeat['move'], True)
                    else:
                        print(f"Writing new motion: unknown command in JSON: {cmd_to_repeat}")

        ## Start writing
        f.write('\n')

        # Define function
        f.write(f"def {body['def']}(robot):\n")

        # Write function content
        for cmd in body['commands']:
            if 'repeat' in cmd:
                writeRepeat(cmd['repeat'], cmd['amount'])
            elif 'multimove' in cmd:
                writeNewKeyframe()
                writeMultimove(cmd['multimove'])
            elif 'move' in cmd:
                writeNewKeyframe()
                writeMove(cmd['move'], True)
            else:
                print(f"Writing new motion: unknown command in JSON: {cmd}")
        print(f"Created motion {body['def']}")
