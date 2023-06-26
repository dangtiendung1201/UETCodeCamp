import mongoose from "mongoose";
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Note", noteSchema);
