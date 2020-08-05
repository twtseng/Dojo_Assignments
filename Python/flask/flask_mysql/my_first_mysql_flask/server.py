from flask import Flask, render_template, redirect, session
from mysqlconnection import connectToMySQL

app = Flask(__name__)
app.secret_key = "myfoosecretkey"

@app.route("/")
def index():
    mysql = connectToMySQL('first_flask')
    friends = mysql.query_db('select * from friends')
    print(friends)
    return render_template("index.html", friends = friends)

if __name__ == "__main__":
    app.run(debug=True)
