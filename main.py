#Import libaraies below
from flask import Flask, render_template, request, session, url_for, redirect, flash
import os
import time
import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText

#Initialize the app from Flask
app = Flask(__name__)

#DEFINE VARIABLES
DB = os.environ.get("DB")
HOST = os.environ.get("HOST")
PASSWORD = os.environ.get("PASSWORD")
USERNAME = os.environ.get("USERNAME")
FROMADDR = os.environ.get("FROMADDR")
EPASS = os.environ.get("EPASS")
RECIPIENTS = ['ssk545@nyu.edu', 'hgn212@nyu.edu', 'pa1027@nyu.edu', 'ksd316@nyu.edu', 'amn419@nyu.edu'] #os.environ.get("RECIPIENTS")

#Define route for landing at /
@app.route('/')
def landing():
	flash("Submitted!")
	return render_template('index.html')

@app.route('/index')
def index():
	return redirect(url_for('/'))
	
@app.route('/deluxe')
def deluxe():
	return render_template('deluxe.html')


@app.route('/standard')
def standard():
	return render_template('standard.html')
	

@app.route('/premium')
def premium():
	return render_template('premium.html')


#Authenticates the login
@app.route('/loginAuth', methods=['GET', 'POST'])
def loginAuth():
	'''try:
		conn = pymysql.connect( host= HOST, user= USERNAME, password= PASSWORD, db= DB, charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
	except:
		print "Yo you done messed up"
		error = 'Server connection error - contact site admin'
		return render_template('login.html', error=error)'''
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
		
@app.route('/booking', methods=['POST'])
def booking():
	name = request.form['name']
	email = request.form['email']
	phone = request.form['phoneNumber']
	town = request.form['town']
	childNames = request.form['childNames']
	age = request.form['childAge']
	date = request.form['date']
	package = request.form['package']
	partyTime = request.form['partyTime']
	info = request.form['info']
	
	emailMessage = '''
	Book date: %s
	
	Client Name: %s
	Client Email: %s
	Client Phone Number: %s
	Client Home Town: %s
	Client Children Names: %s
	Client Children Ages: %s
	Client Party Date: %s
	Client Party Package: %s
	Client Party Time: %s
	Additional Client Info: %s ''' % (time.strftime("%m/%d/%Y"), name, email, phone, town, childNames, age, date, package, partyTime, info)
	
	clientEmailMessage = "The info below has been sent to the fete team, we will get back to you ASAP! \n" + emailMessage
	
	#USERS MESSAGE!!!
	msg = MIMEMultipart()
	msg['From'] = FROMADDR
	msg['To'] = ", ".join(RECIPIENTS)
	msg['Subject'] = "New Booking Email! - %s" % time.strftime("%m/%d/%Y")
	 
	msg.attach(MIMEText(emailMessage, 'plain'))
	 
	server = smtplib.SMTP('smtp.gmail.com', 587)
	server.starttls()
	server.login(FROMADDR, EPASS)
	text = msg.as_string()
	server.sendmail(FROMADDR, RECIPIENTS, text)
	server.quit()
	
	#CLIENT MESSAGE!!!
	msg = MIMEMultipart()
	msg['From'] = FROMADDR
	msg['To'] = email
	msg['Subject'] = "New Booking Email! - %s" % time.strftime("%m/%d/%Y")
	
	msg.attach(MIMEText(clientEmailMessage, 'plain'))
	 
	server = smtplib.SMTP('smtp.gmail.com', 587)
	server.starttls()
	server.login(FROMADDR, EPASS)
	text = msg.as_string()
	server.sendmail(FROMADDR, email, text)
	server.quit()
	
	return render_template('index.html')



app.secret_key = 'This key is truely secret'
if __name__ == "__main__":
	app.run('127.0.0.1', 5000, debug = True)
