
import mongoose from "mongoose";

// create Schema
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        default: "Anonymous",
        min:2,
        max:100
    },
    email:{
        type: String,
        min:2,
        max:100,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
})

// create model
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
