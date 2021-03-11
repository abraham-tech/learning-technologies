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


#Create resource management end points for

from flask_rest_jsonapi import Api, ResourceDetail, ResourceList 

class ArtistMany (ResourceList):
    schema = ArtistSchema
    data_layer = {
        'session': db.session,
        'model': Artist
    }

class ArtistOne(ResourceDetail):
    schema = ArtistSchema
    data_layer = {
        'session': db.session,
        'model': Artist
    }

api = Api(app)
api.route(ArtistMany, 'artist_many', '/artists')
api.route(ArtistOne, 'artist_one', '/artists/<int:id>')

# main loop to run app in debug mode
if __name__=='__main__':
    app.run(debug=True)