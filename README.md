# Robot Caretaker
This is a project aiming to aid remote caretakers with expressing body language to patients using humanoid robots.

This repository contains 3 standalone applications:
- Frontend
- Backend
- Webots example

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

# Setup (windows)
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
- Open `robot-caretaker\webots_implementation\worlds\example.wbt` in Webots
- Simulation should start automatically

The system should now be running end-to-end.
Try clicking a button in the web-UI and see if it is sent to the robot simulation.

# Troubleshooting
- Can't activate Virtual environment?
    - Open powershell as admin and type: `Set-ExecutionPolicy RemoteSigned`
- Frontend won't run?
    - Try `npm audit fix` (optionally with `--force`)
- Webots simulator does not run (timestep stuck at 0.00)?
    - Restart Webots. 
- SSL tag mismatch?
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
        - `subscriber.py` Subscriber logic. Used in `supercontroller.py`
        - `super_controller.py` General controller. Robot-specific controllers inherit from this.
    - `motions` .motion files used for pre-existing animations
    - `worlds` .wbt file to open in Webots
    
# To Future Forkers:
I recommend to look at and re-implement/revert commit `55d7766aae460bb51158d65ffc621db554ca462b` to make application more secure.
