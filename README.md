# **Robot Caretaker**
*This is a project aiming to aid remote caretakers with expressing body language to patients using humanoid robots.*

# Table of Contents
- [Requirements](#requirements)
- [Setup (Windows)](#setup-windows)
- [How to use](#how-to-use)
- [Adding a new Robot](#adding-a-new-robot)
- [Robot Motion Language](#robot-motion-language-rml)
- [Troubleshooting](#troubleshooting)
- [Navigating this Repository](#navigating-this-repository)
- [Glossary](#glossary)
- [To Forkers](#to-forkers)

# Requirements
- NodeJS 16+
    - Optional: yarn (`npm install -g yarn`) 
- Python 3.10+
- RabbitMQ
    - `choco install rabbitmq`
- Webots R2022b (newer versions not tested)

# Setup (Windows)
*All commands are to run from `/<subdir to setup>`*
## Robot-Motion-Language:
- `npm i`
- run `npm run build:web` from `/robot-motion-language` directory if you have made any changes to RML
## Web frontend:
- `npm install`
- `yarn start` or `npm start`
- Browser window should open automatically at http://localhost:3000
## Web backend:
- Create venv if first time setup:
    - `python -m venv venv`
- Activate venv:
    - `.\venv\Scripts\activate`
- `pip install -r requirements.txt`
- `python server.py`


## RabbitMQ:
- Go to http://localhost:15672 to confirm that rabbitmq is running
- if not running, open rabbitMQ as a windows service
- Default credentials if you want to monitor:
    - Username: `guest`
    - Password: `guest`

## Robot Simulation:
- `pip install -r requirements.txt` (Webots do not support Virtual environments as of version 2022b)
- Open `robot-caretaker\webots_simulation\worlds\example.wbt` in Webots. (Simulation starts automatically)

**The system should now be running end-to-end.**

*Try clicking a button in the web-UI and see if it is sent to the robot simulation.*

# How to use
## Make Robot Perform Motion

On the webpage there are several large buttons coresponding to a robot motion.
Clicking one of these will result in the robot performing that motion.

## Adding a New Motion
**First, let's create a new motion**
* Click the `Add Motion` button in the navigation bar at the top of the page.
* You are presented with a Code Editor.
* Follow the RobotMotionLanguage guide to create a motion.
* Click the `SAVE` Button to save your motion function to the system.
*If the DSL does not meet your requirements, you can add motions directly in `motion_functions.py`*

**Let's add a button for performing the motion**
* Click the green `+` button in the bottom right corner of the webpage.
* An input field will appear. Enter the name and sentiment of the new motion (name should be similar to motion-function) and press `ENTER`.

**The robot should now perform the motion when clicking the button!**


To delete a motion button, click the red trashcan in the bottom right corner of the webpage.
An input field will appear. Enter the exact name and sentiment of the motion button you would like to delete and press `ENTER`.

To hide the input field, refresh the page. 

# Adding a new robot
**This system allows you to easily add any robot:**
* Copy `/webots_simulation` directory
* Add a new robot to the Webots simulation and change its controller to `robot_controller.py`
* Fill in values for joint motors and sensors in `/controllers/robot_controller/config.yaml`

*The system should now be functional with your newly added robot.*

# Robot Motion Language (RML)
*RML is a custom DSL that allows easy creation of motions. RML is intended to use in the monaco code editor in the browser.*

## How to use the Editor
Use the editor as any other text editor.

Press `Enter` for newline.

Press `Tab` for an indent.

If any text has a `red` underline, `hover` your mouse over it to see what the problem is and follow the message to fix it.

When you open up the editor, an RML example should be displayed.

Notice the indentation structure. This is not strictly neccessary, but makes the program much easier to read.

## How to structure RML
- `define wave` Defines a motion called `wave`. The `define` contains more RML code, demonstrated by indentation. Anything more indented than the `define` is contained within it. The `end` at the same indentation-level as the `define`, terminates it. We call commands that contains code and ends with an `end` a `block command`. Remember to indent any contained code for readability.

- `repeat 3` is another block command. It will perform any code contained between it and its `end` 3 times. Note that the `3` can be an arbitrary integer. Remember to indent any contained code for readability.

- `multimove` is another block command. It will perform any command contained between it and its `end` simultaneously rather than in sequence. Remember to indent any contained code for readability.

- `move right shoulder pitch to -1.5` is the final command. This will move the specified joint to the specified end-position `-1.5`.

## Usage
```
define <your_motion_name>
    <Rest of RML code is indented and goes here>
end
```
Note that \<your_motion_name\> is arbitrary, but don't include spaces.

```
repeat <amount>
    <RML code to be repeated is indented and goes here>
end
```
Note that \<amount\> is an arbitrary integer.

```
multimove
    <RML to be performed simultainously is indented>
end
```
```
move <side> <joint> <rotation> to <position>
```
Note that \<side\> and \<rotation\> is not always needed depending on the joint.

- Available options for \<side\>:
    - `right` | `left`
- Available options for \<joint\>:
    - `head` | `fingers` | `wrist` | `elbow` | `shoulder` | `torso` | `hip` | `knee` | `ankle` | `toes`
- Available options for \<rotation\>:
    - `pitch` | `roll` | `yaw`
- \<position\> is the position the joint will **end** up in. It is specified in Radians.


# Troubleshooting
- **I expected an outcome, but it did not happen?**
    - Check the terminal of the responsible application for any error messages.
- **My robot won't perform a motion?**
    - Make sure all motors and sensors in the Motion-Function you are trying to run is set in your config.yaml
    - Make sure your robot supports all the joints used in the Motion you are trying to run.
    - Make sure your mood card name is as close as possible to the motion you are trying to perform.
- **Can't activate Virtual environment?**
    - Open powershell as admin and type: `Set-ExecutionPolicy RemoteSigned`
- **Frontend won't run?**
    - Try `npm audit fix` (optionally with `--force`)
- **Fatal error in launcher when trying to `pip install`?**
    - Use `python -m pip install <package_to_be_installed>`
- **Webots simulator does not run (timestep stuck at 0.00)?**
    - Restart Webots.
- **SSL tag mismatch?**
    - Some requirements does not like to be downloaded/installed over 5Ghz connection. Try 2.4Ghz or Ethernet.

# Navigating this repository
- `backend` Contains the Flask server and is the backend of the web-app
    - `messaging` Publisher
    - `server.py` API endpoints

- `frontend` React app
    - `public`
        - `rml-generator.js` Bundle from RML dir that allows RML to JSON generation
        - `rml-server-worker` Bundle from RML dir that allows RML to be used in monaco editor.
    - `src`
        - `components` React components (navbar, moodgrid, moodcards..)
        - `pages` The pages the React-router browses between
        - `App.tsx` Main page

- `robot-motion-language` (RML) The DSL to create motions with
    - `src`
        - `cli` DSL command line functions and tool
        - `generator` Generates JSON from an RML program
        - `language-server`
            - `generated` Langium generated semantic model
            - `main-browser.ts` Entry point for use in browser
            - `main.ts` Entry point for use as extension
            - `validator` Syntax validation
            - `.langium` Grammar for RML
        - `web` Functions used in web. Bundled and exported to frontend
    - `package.json` See `scripts` for bundling and compiling

- `webots_simulation`
    - `controllers` 
        - `nao_motion_controller` Deprecated. Example implementation of Webots controller for the Nao robot using .MOTION files.
        - `robot_controller` General controller for robots in Webots.
            - `config.yaml` Config file used as resolver for robot-device naming and initialization.
            - `motion_functions.py` File with motions that robots can perform. This file will be appended to when creating a new motion in the frontend.
            - `robot_controller.py` This is the robot controller.
        - `subscriber.py` Subscriber logic. Used in `supercontroller.py`
        - `super_controller.py` General controller. Robot controllers inherit from this.
    - `motions` Deprecated. .motion files used for pre-existing animations
    - `worlds` .wbt file to open in Webots
    
# Glossary
- **Controller** or **Robot Controller**
    - This is a script that tells the robot what to do.
- **Motion-Function**
    - A function of motor-setting sequences resulting in an animation/motion.
- **Instruction**
    - What the robot will perform e.g wave, smile, cheer...
- **Command**
    - Part of an instruction. i.e "move right shoulder pitch"
- **MoodCard**
    - The cards/button in the frontend you click to make the robot perform an instruction
    
# To Forkers:
*I recommend to take a look at and re-implement/revert commit `55d7766aae460bb51158d65ffc621db554ca462b` to make application more secure.*

*Do not use in an official capacity until checks have been implemented for errors in monaco editor before allowing sending the RML program*

*Styling in frontend is largely in-line, feel free to redo*

*Fonts and other real-time retrieved assets will not work on Intranet. To fix, include assets in project*
