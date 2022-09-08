require ('dotenv').config({path: '../config/.env'});
import express from "express";
import cors from "cors";
const mongoose = require('mongoose');

/* import the mongoose models */
const { List } = require('./database/models/list.model');
const { Task } = require('./database/models/task.model');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* handeling cors & headers */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next();
});

/* routes handlers*/

/* purpose : get all the lists in the database */
app.get('/lists', (req, res) => {
    List.find({}).then((lists:string) => {
        res.send(lists);
    })
});

/* purpose : create a new list with an id */
app.post('/lists', (req, res) => {
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc:string) => {
        res.send(listDoc);
    })
});

/* purpose: update a specified list */
app.patch('/lists/:id', (req,res) => {
    List.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

/* purpose: delete a specified list*/
app.delete('/lists/:id', (req, res) => {
    List.findOneAndRemove({ 
        _id: req.params.id
    }).then((removedListDoc:any) => {
        res.send(removedListDoc);
    })
});

/* purpose: getting all the tasks from a specified list */
app.get('lists/:listId/tasks', (req,res) => {
    Task.find({
        _listId: req.params.listId
    }).then((tasks:string) => {
        res.send(tasks);
    })
});
app.get('/lists/:listId/tasks/:id', (req,res) => {
    Task.findOne({
        _listId: req.params.listId,
        _id: req.params.id
    }).then((task:string) => {
        res.send(task);
    })
});

/* purpose: creating a new task in a specific list */
app.post('/lists/:listId/tasks', (req,res) => {
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    newTask.save().then((newTaskDoc:string) => {
        res.send(newTaskDoc);
    })
});

/* purpose: updating a specific task in a specified list */
app.patch('/lists/:listId/tasks/:id', (req,res) => {
    Task.findOneAndUpdate({ _id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })
});

/* purpose: deleting a specific task in a specified list */
app.delete('/lists/:listId/tasks/:id', (req,res) => {
    Task.findOneAndRemove({
        _id: req.params.id
    }).then((removeTaskDoc:string) => {
        res.send(removeTaskDoc);
    })
});

const connectionUrl = ('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.bru98.mongodb.net/Task-Manager');
mongoose.connect(connectionUrl, {useUnifiedTopology: true})
    .then(() => console.log('connected to MongoDB'))
    .catch((err:any) => console.log('failed to connect to MongoDB', err));

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is listenning on port " + port);
})