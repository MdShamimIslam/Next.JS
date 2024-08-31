"use server";

import { createUser, findUserByCredential,updateInterest } from "@/app/queries/queries";
import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache";

// register user from registration form
const registerUser = async (formData) => {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
};

// login user from login form
const formLogin = async (formData) => {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const foundUser = await findUserByCredential(credential);
    
    if (foundUser) {
        // Convert the found user to a plain object
        return JSON.parse(JSON.stringify(foundUser));
      }
  
    return null;

  } catch (error) {
    throw error;
  }
};

// Add interested event
const addInterestedEvent = async(eventId,authId)=>{
  try {
    await updateInterest(eventId,authId);
    
  } catch (error) {
    throw error;
  }
  revalidatePath('/');
}

// export all action functions
export { 
  registerUser, 
  formLogin,
  addInterestedEvent 
};
