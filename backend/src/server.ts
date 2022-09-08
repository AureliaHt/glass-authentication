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

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

/* routes handlers*/

/* purpose : get all the lists in the database */
app.get('/lists', (req, res) => {
    List.find({}).then((lists:string[]) => {
        res.send(lists);
    })
});

/* purpose : create a new list with an id */
app.post('/lists', (req, res) => {
    let title = req.body.title;
});

/* purpose: update a specified list */
app.patch('/lists/:id', (req,res) => {

});

/* purpose: delete a specified list*/
app.delete('/lists:id', (req, res) => {

});

const connectionUrl = ('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.bru98.mongodb.net/Task-Manager');
mongoose.connect(connectionUrl, {useUnifiedTopology: true})
    .then(() => console.log('connected to MongoDB'))
    .catch((err:any) => console.log('failed to connect to MongoDB', err));

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is listenning on port " + port);
})