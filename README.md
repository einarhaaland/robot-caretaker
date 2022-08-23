# Robot Caretaker
This is a project aiming to aid remote caretakers with expressing body language to patients using humanoid robots.

## Stack
- React Typescript Frontend
- Flask Backend
- ..

## Requirements
- NodeJS
    - yarn (`npm install -g yarn`)
- Python

## Setup (windows)
- cd two terminals to project folder
- Terminal 1:
    - `cd backend`
        - create/activate venv:
            - `python venv venv`
            - `.\venv\Scripts\activate`
        - `pip install -r requirements.txt`
        - `python server.py`
- Terminal 2:
- `cd frontend`
    - `yarn install`
    - `yarn start`
- Browser window should open automatically at `http://localhost:3000`