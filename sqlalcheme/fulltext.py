from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_whooshalchemy import *

app = Flask(__name__)
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///full_text.db'
app.config['SQLALCHMY_TRACK_MODIFICATIONS'] = True
app.config['DEBUG'] = True
app.config['WHOOSH_BASE'] = 'whoosh'\


class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    pets = db.relationship('Pet', backref='owner')
    age = db.Column(db.Integer)


class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    owner_id = db.Column(db.Integer, db.ForeignKey('person.id'))


whoosh_index(app, Person)