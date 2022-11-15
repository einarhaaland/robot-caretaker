from flask import Flask
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
    send(mood)
    return {"mood": mood}

@app.route("/motion", methods=["POST"])
def motion():
    send(request.json)


if __name__ == "__main__":
    app.run(debug=True)