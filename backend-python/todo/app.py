import os
from datetime import datetime

from flask import Flask, request, render_template, redirect
from flask_bootstrap import Bootstrap
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
bootstrap = Bootstrap(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'todo.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#...
db = SQLAlchemy(app)
migrate = Migrate(app, db)





#...
#model class
class Task(db.Model):  
        id = db.Column(db.Integer, primary_key=True)
        """:type : init """
        
        description = db.Column(db.String(200), nullable=False)
        """:type : str """

        date_created = db.Column(db.DateTime, default=datetime.utcnow)
        """:type : datetime"""
        
        def __repr__(self):
              return f"Task: #{self.id}, content: {self.description}"    



@app.route('/', methods=['POST', 'GET']) 
def index():
    if request.method == 'POST':
        task = Task(description=request.form['description'])
        
        #task = Task.request.form['description'] 
        try:
            db.session.add(task)
            db.session.commit()
            return redirect("/")
        except:
            return "Houve um erro, ao inserir a tarefa"
    else:
        tasks = Task.query.order_by(Task.date_created).all()
        return render_template('index.html', tasks=tasks)


@app.route('/delete/<int:id>')
def delete(id):
    task = Task.query.get_or_404(id)
    try:
        db.session.delete(task)
        db.session.commit()
        return redirect('/')
    except:
        return 'Houver um problema na remoçao'

@app.route('/update/<int:id>', methods=['POST', 'GET'])
def update(id):
    task = Task.query.get_or_404(id)
    if request.method == 'POST':
        task.description = request.form['description']
        try:
            db.session.commit()
            return redirect('/')
        except:
            return 'Houver um error ao atualizar'
    else:
        return render_template('update.html', task=task)