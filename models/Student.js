import mongoose from "mongoose";

const Schema = mongoose.Schema; 


const StudentSchema = new Schema({
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
        default: "student",
      }
})

const Student = mongoose.model("Student", StudentSchema);

export default Student;

