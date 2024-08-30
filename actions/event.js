
const { eventModel } = require("@/app/models/event-model")

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

export {
    getAllEvents,
    getEventById
}