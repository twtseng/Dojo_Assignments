from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submitted_info', methods=['POST'])
def submitted_info():
    return render_template('submitted_info.html'
    , name=request.form['name']
    , location=request.form['location']
    , favorite_language=request.form['favorite_language']
    , comment=request.form['comment']
    )

if __name__ == "__main__":
    app.run(debug=True)