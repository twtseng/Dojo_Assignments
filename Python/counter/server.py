from flask import Flask, render_template, session, redirect

app = Flask(__name__)
app.secret_key = "foobarsecretkey"

@app.route('/')
def default_page():
    if 'visits' in session:
        session['visits'] += 1
    else:
        session['visits'] = 1
    return render_template('index.html', visits = session['visits'])

@app.route('/clear_visits')
def clear_visits():
    session['visits'] = 0
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)