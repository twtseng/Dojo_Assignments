from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "foobarsecretkey"

@app.route("/")
def default_page():
    return render_template("/index.html")

@app.route("/fruit_submission", methods=['POST'])
def fruit_submission():
    session['Strawberry'] = request.form['Strawberry']
    session['Raspberry'] = request.form['Raspberry']
    session['Apple'] = request.form['Apple']
    return redirect("/show")

@app.route("/show")
def show():
    return render_template('fruit.html'
    ,Strawberry = session['Strawberry']
    ,Raspberry = session['Raspberry']
    ,Apple = session['Apple']
    )
    

if __name__ == '__main__':
    app.run(debug=True)