from flask import Flask
app = Flask(__name__)
port=8080

@app.route('/')
def hello_world():
    return 'Hello, World!'
@app.route('/register')
def register():
    return 'Registering user...'
if __name__ == '__main__':
    app.run(debug=True,port=port)
