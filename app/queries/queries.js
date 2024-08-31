
// models
import mongoose from "mongoose";
import { eventModel } from "../models/event-model";
import { userModel } from "../models/user-model";

// get all events
const getAllEvents = async()=>{
    const events = await eventModel.find();
    return events ;
}

// get single event by id
const getEventById = async(id)=>{
    const event = await eventModel.findById(id);
    return event ;
}

// create user
const createUser = async(user)=>{
    return await userModel.create(user);
}

// find login user by credentials
const findUserByCredential = async(creadential)=>{
    const loginUser = await userModel.findOne(creadential);

    if(loginUser){
        return loginUser;
    }
    return null;
}

const updateInterest = async(eventId,authId)=>{
    const event = await eventModel.findById(eventId);
    if (event) {
        // CFS
        // const foundUser = event.interested_ids.find(id => id.toString() === authId);
        const foundUser = event.interested_ids.find(id => id === authId);
        if (foundUser) {
            // CFS
            // event.interested_ids.pull(new mongoose.Type.ObjectId(authId));
            event.interested_ids.pull(authId);
        }else{
             // CFS
            //  event.interested_ids.push(new mongoose.Type.ObjectId(authId));
             event.interested_ids.push(authId);
        }

        event.save();
    }
}

// export all function
export {
    getAllEvents,
    getEventById,
    createUser,
    findUserByCredential,
    updateInterest
}