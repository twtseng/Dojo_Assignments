from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def default_page():
    return render_template("/index.html")

@app.route("/fruit_submission", methods=['POST'])
def fruit_submission():
    return render_template("/fruit.html"
    ,Strawberry = request.form['Strawberry']
    ,Raspberry = request.form['Raspberry']
    ,Apple = request.form['Apple']
    )
    

if __name__ == '__main__':
    app.run(debug=True)