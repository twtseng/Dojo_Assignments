from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
@app.route('/<rows>')
@app.route('/<columns>/<rows>')
@app.route('/<columns>/<rows>/<color1>')
@app.route('/<columns>/<rows>/<color1>/<color2>')
def drawCheckerboard(columns=8, rows=8, color1='red', color2='black'):
    columns = int(columns)
    rows=int(rows)
    return render_template('index.html', columns=columns, rows=rows, color1=color1, color2=color2)

@app.route('/<path:u_path>')
def catch_all(u_path):
    return f"{u_path} is not supported at this time"

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.