import json
from flask import Flask, request
from flask_cors import CORS
from messaging.send import send

app = Flask(__name__)
CORS(app)

@app.route("/test")
def test():
    return {"Test": "OK"}

@app.route("/test_robot_connection")
def test_robot_connection():
    # Do call to robot api
    # if success return status good
    status_code = 200
    return {"status": status_code}

@app.route("/mood/<mood>")
def mood(mood):
    body = json.dumps({"instruction": mood})
    send(body)
    return {"mood": mood}

@app.route("/schedule", methods=["POST"])
def schedule():
    send(json.dumps(request.json))
    return {"status": 200}

@app.route("/motion", methods=["POST"])
def motion():
    send(json.dumps(request.json))
    return {"status": 200}


if __name__ == "__main__":
    app.run(debug=True)