# **Robot Caretaker**
This is a project aiming to aid remote caretakers with expressing body language to patients using humanoid robots.

# Table of Contents
- [Stack](#stack)
- [Requirements](#requirements)
- [Setup (Windows)](#setup-windows)
- [Adding a new Robot](#adding-a-new-robot)
- [Troubleshooting](#troubleshooting)
- [Navigating this Repository](#navigating-this-repository)
- [Glossary](#glossary)
- [To Forkers](#to-forkers)


# Stack
- React Typescript Frontend
- Flask Backend
- RabbitMQ Messaging System
- Webots Robot Simulator

# Requirements
- NodeJS
    - Optional: yarn (`npm install -g yarn`) 
- Python
- RabbitMQ
    - `choco install rabbitmq`
- Webots (to run robot example)

# Setup (Windows)
## Web application:
- `cd` two terminals to project folder
- Terminal 1:
    - `cd backend`
        - create/activate venv:
            - `python -m venv venv`
            - `.\venv\Scripts\activate`
        - `pip install -r requirements.txt`
        - `python server.py`
- Terminal 2:
- `cd frontend`
    - `npm install`
    - `yarn start` or `npm start`
- Browser window should open automatically at http://localhost:3000

## RabbitMQ:
- Open rabbitMQ as a windows service
- Go to http://localhost:15672 to confirm that rabbitmq is running
- Default credentials:
    - Username: `guest`
    - Password: `guest`

## Robot Simulation:
- `pip install pika` (Webots do not support Virtual environments)
- `pip install pyyaml`
- Open `robot-caretaker\webots_implementation\worlds\example.wbt` in Webots
- Simulation should start automatically

**The system should now be running end-to-end.**

*Try clicking a button in the web-UI and see if it is sent to the robot simulation.*

# Adding a new robot
This system allows you to easily add any robot:
* Create a new folder `<your_controller_name>` in `/webots_implementation/controllers`
* Create a controller `<your_controller_name>.py` in `/controllers/<your_controller_name>`
* Fill in values for joint motors and sensors in `/controllers/<your_controller_name>/config.yaml`
* Create Motion-Functions akin to functions `wave(), nod(), etc` in `/controllers/nao_motor_controller/nao_motor_controller`
* Call Motion-Function in the run() function of your controller i.e `elif instruction == 'your_instruction': self.<motion_function>()`
* To send custom instructions from frontend, you currently have to add your own MoodCard in `frontend/src/App.tsx` with `title='<YourInstuction>'`
* **Done!**

# Troubleshooting
- **Added a new robot and it won't run an instruction?**
    - Make sure all motors and sensors in the Motion-Function you are trying to run is set in your config.yaml
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
    - `behaviour` Not currently used
    - `messaging` Publisher
    - `server.py` API endpoints

- `frontend` React app
    - `src`
        - `components` React components (navbar, moodcards..)
        - `App.tsx` Main page, moodcards are added here

- `webots_implementation`
    - `controllers` 
        - `nao_emotion_controller` Example implementation of Webots controller for the Nao robot using MOTION files.
        - `nao_motor_controller` Example implementation of Webots controller for the Nao robot using its motors.
            - `config.yaml` Config file used when initializing the robots devices
        - `subscriber.py` Subscriber logic. Used in `supercontroller.py`
        - `super_controller.py` General controller. Robot-specific controllers inherit from this.
    - `motions` .motion files used for pre-existing animations
    - `worlds` .wbt file to open in Webots
    
# Glossary
- **Controller** or **Robot Controller**
    - This is a script that tells the robot what to do.
- **Motion-Function**
    - A function motor-setting sequences resulting in an animation/motion. Use motor_set_position_sync() once every keyframe to avoid async issues.
- **Instruction**
    - What the robot will perform e.g wave, smile, cheer...
- **MoodCard**
    - The cards/button in the frontend you click to make the robot perform an instruction
    
# To Forkers:
*I recommend to look at and re-implement/revert commit `55d7766aae460bb51158d65ffc621db554ca462b` to make application more secure.*
