from flask import Flask, render_template
from flask.globals import request
from flask_sqlalchemy import SQLAlchemy

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config['TEMPLATES_AUTO_RELOAD'] = True

# SQLAlchemy config
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/eats'
db = SQLAlchemy(app)

class Food(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String, nullable=False)
    food = db.Column(db.String, nullable=False)

    def __init__(self, city, food):
        self.city = city
        self.food = food

db.create_all()

# Home page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    city = request.form.get('city')
    food = Food.query.filter_by(city=city).all()
    if not city:
        city = 'All Available Food'
        food = Food.query.all()
    return render_template('results.html', city = city, food = food )
