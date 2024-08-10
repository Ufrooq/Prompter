import mongoose from "mongoose";

let isConnected = false;

export const connectdb = async () => {
  if (isConnected) {
    console.log("Already connected to db !");
    return;
  }

  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    isConnected = true;
    console.log("Mongo db connected !");
  } catch (error) {
    console.log(error.message);
  }
};
