from flask import *
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from helper_functions import salt_password
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    email = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(120), nullable=False )
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup', methods=['GET','POST'])
def signup():
    if request.method == 'POST':
        _username = request.form['username']
        _email = request.form['email']
        _password = request.form['password']

        salted_password =salted_password(_password)
        hashed_password = bcrypt.generate_password_hash(salted_password)

        try:
            new_user = User(username=_username, email=_email,password=hashed_password)
            db.session.add(new_user)
            db.session.commit()
        except: 
            print("there was an error creating your account ")
            return redirect('/')
        
        return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)