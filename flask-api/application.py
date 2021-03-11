from flask import Flask
from flask_sqlalchemy import SQLAlchemy

#create a new Flask Application instance
app = Flask(__name__)

#set up SQLAlchemy 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///artists.db'
db = SQLAlchemy(app)

#Define a class for the artists table 
class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    birth_year = db.Column(db.Integer)
    genre = db.Column(db.String)

#Create the table for the artists table 
db.create_all()
