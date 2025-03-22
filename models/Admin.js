import mongoose from "mongoose";

const Schema = mongoose.Schema; 


const AdminSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String, // ade1234
        required: true,
        unique: true,
    },

    password:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        default: "admin",
      }
})

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;

