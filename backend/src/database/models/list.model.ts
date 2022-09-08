import { Schema, model } from "mongoose";

/* represent a document in MongoDB */
interface Lists {
    title: string
}

/* Schema corresponding to the document interface */
const ListSchema = new Schema<Lists>({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

const List = model<Lists>('List', ListSchema);

module.exports = { List }