import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        company: {
            type: String
        },
        email: {
            type: String
        },
        service:{
            type: String
        },
        phone: {
            type: String
        },
        description: {
            type: String
        }
    }
);

const customerModel = new mongoose.model("customerModel", customerSchema);

export default customerModel;