from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')
@app.route('/play')
@app.route('/play/<repeat_count>')
@app.route('/play/<repeat_count>/<color>')
def play(repeat_count=3, color='blue'):
    repeat_count = int(repeat_count)
    return render_template('index.html', repeat_count=repeat_count, color=color)

@app.route('/<path:u_path>')
def catch_all(u_path):
    return f"{u_path} is not supported at this time"
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

