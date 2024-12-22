from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
port=8080
@app.route('/')
def hello_world():
    return 'Hello, World!'
@app.route('/register')
def register():
    return 'Registering user...'
if __name__ == '__main__':
    app.run(debug=True,port=port)
