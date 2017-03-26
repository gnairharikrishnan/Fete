#Import libaraies below
from flask import Flask, render_template, request, session, url_for, redirect
import os

#Initialize the app from Flask
app = Flask(__name__)
				
#Define route for landing at /
@app.route('/')
def landing():
	return render_template('index.html')


app.secret_key = 'This key is truely secret'
if __name__ == "__main__":
	app.run('127.0.0.1', 5000, debug = True)