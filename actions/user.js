

"use server";

import connectMongo from "@/connectDB/connectMongo";
import User from "@/models/User";
import { wait } from "@/utils/wait";
import { revalidatePath } from "next/cache";

// add user in MongoDB
export const addUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const userData = { name, email };

  try {
    // connect mongo
    await connectMongo();

    // submiting delay
    await wait(3000);

    // insert user data in database
    await new User(userData).save();

    // revalidate users
    revalidatePath('/');

  } catch (error) {
    console.log(error);
  }
};

// get users from MongoDB
export const getUsers = async () => {
  try {
    // connect mongo
    await connectMongo();
    // get all users data from database
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};
