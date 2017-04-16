#Import libaraies below
from flask import Flask, render_template, request, session, url_for, redirect
import os

#Initialize the app from Flask
app = Flask(__name__)

#DEFINE VARIABLES
DB = os.environ.get("DB")
HOST = os.environ.get("HOST")
PASSWORD = os.environ.get("PASSWORD")
USERNAME = os.environ.get("USERNAME")

#Define route for landing at /
@app.route('/')
def landing():
	return render_template('index.html')
	
@app.route('/login')
def login():
	return render_template('login.html')
		
#Define route for register
@app.route('/register')
def register():
	return render_template('register.html')

#Authenticates the login
@app.route('/loginAuth', methods=['GET', 'POST'])
def loginAuth():
	try:
		conn = pymysql.connect( host= HOST, user= USERNAME, password= PASSWORD, db= DB, charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
	except:
		print "Yo you done messed up"
		error = 'Server connection error - contact site admin'
		return render_template('login.html', error=error)
	#grabs information from the forms
	username = request.form['username']
	password = request.form['password'].encode('utf-8')
	md5password = hashlib.md5(password).hexdigest()
	#cursor used to send queries
	cursor = conn.cursor()
	#executes query
	query = 'SELECT * FROM users WHERE username = %s and password = %s'
	cursor.execute(query, (username, md5password))
	#stores the results in a variable
	data = cursor.fetchone()
	#use fetchall() for more
	cursor.close()
	conn.close()
	if data:
		#creates a session for the the user
		#session is a built in
		session['username'] = username
		session['logged_in'] = True
		return redirect(url_for('home'))
	else:
		#returns an error message to the html page
		error = 'Invalid login or username'
		return render_template('login.html', error=error)

		

app.secret_key = 'This key is truely secret'
if __name__ == "__main__":
	app.run('127.0.0.1', 5000, debug = True)