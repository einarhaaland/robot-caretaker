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
            - `python -m venv venv`
            - `.\venv\Scripts\activate`
                - If you encounter an error here: Open powershell as admin and type: `Set-ExecutionPolicy RemoteSigned`
                - This will alow you to run the venv activation script
        - `pip install -r requirements.txt`
        - `python server.py`
- Terminal 2:
- `cd frontend`
    - `yarn install`
    - `yarn start`
- Browser window should open automatically at `http://localhost:3000`