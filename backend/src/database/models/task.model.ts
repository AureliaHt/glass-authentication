import { Schema, model, Types } from "mongoose";

/* represent a document in MongoDB */
interface Tasks {
    title: string;
    _listId: Types.ObjectId;
}

/* Schema corresponding to the document interface */
const TaskSchema = new Schema<Tasks>({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _listId: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

const Task = model<Tasks>('Task', TaskSchema);

module.exports = { Task };