import mongoose from "mongoose";

let isConnected = false;

export const connectdb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Already connected to db !");
    return;
  }

  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParse: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Mongo db connected !");
  } catch (error) {
    console.log(error.message);
  }
};
