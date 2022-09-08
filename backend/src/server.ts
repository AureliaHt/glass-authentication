require ('dotenv').config({path: './config/.env'});
import express from "express";
import cors from "cors";

/* import the mongoose models */
const { List } = require('./database/models/list.model');
const { Task } = require('./database/models/task.model');

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

/* routes handlers*/

/* purpose : get all the lists in the database */
app.get('/lists', (req, res) => {
    
});

/* purpose : create a new list with an id */
app.post('/lists', (req, res) => {

});

/* purpose: update a specified list */
app.patch('/lists/:id', (req,res) => {

});

/* purpose: delete a specified list*/
app.delete('/lists:id', (req, res) => {

});

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is listenning on port " + port);
})