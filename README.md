# Robot Caretaker
This is a project aiming to aid remote caretakers with expressing body language to patients using humanoid robots.

This repository contains 3 standalone applications:
- Frontend
- Backend
- Webots example

## Stack
- React Typescript Frontend
- Flask Backend
- RabbitMQ Messaging System
- Webots Robot Simulator

## Requirements
- NodeJS
    - yarn (`npm install -g yarn`)
- Python
- RabbitMQ
    - `choco install rabbitmq`
- Webots (to run robot receiver example)

## Setup (windows)
Web application:
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
    - `yarn start`
- Browser window should open automatically at `http://localhost:3000`

RabbitMQ:
- Open rabbitMQ as a windows service
- Go to `http://localhost:15672` to confirm that rabbitmq is running

Robot Simulation:
- Open `robot-caretaker\webots_implementation\worlds\example.wbt` in Webots
- In another terminal:
    - `cd webots_implementation`
        - create/activate venv:
            - `python -m venv venv`
            - `.\venv\Scripts\activate`
        - `pip install -r requirements.txt`
- Start simulation (should happpen automatically)

The system should now be running end-to-end.
Try clicking a button in the web-UI and see if it is sent to the robot simulation.

## Troubleshooting
- Can't activate Virtual environment?
    - Open powershell as admin and type: `Set-ExecutionPolicy RemoteSigned`
- Frontend won't run?
    - Try `npm audit fix` (optionally with `--force`)
- SSL tag mismatch?
    - Some requirements does not like to be downloaded/installed over 5Ghz connection. Try 2.4Ghz or Ethernet.