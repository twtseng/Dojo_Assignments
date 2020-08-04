from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/dojo')
def success():
    return "Dojo!"

@app.route('/lists')
def lists():
    student_info = [
        {'name':'Michael', 'age':35},
        {'name':'Sara', 'age':22},
        {'name':'Erwin', 'age':10}
    ]
    return render_template("lists.html", random_numbers=[6,3,2,7], students=student_info)

@app.route('/say/<name>')
def hello(name):
    capitalizedName = name[0:1].upper() + name[1:].lower()
    return "Hi, " + capitalizedName

@app.route('/repeat/<repeat_count>/<repeat_text>')
def repeat(repeat_count, repeat_text):
    if not repeat_count.isnumeric():
        return f"Invalid repeat count: {repeat_count}.Repeat count must be an integer"
    return_text = '<html><body>'
    for _ in range(int(repeat_count)):
        return_text += f"<h1>{repeat_text}</h1>"
    return_text += '</body></html>'
    return return_text

@app.route('/<path:u_path>')
def catch_all(u_path):
    return f"{u_path} is not supported at this time"
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

