import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    organization: {
        type: String
    },
    feedback: {
        type: String
    }
});

const feedbackModel = new mongoose.model("feedbackModel", feedbackSchema);

export default feedbackModel;