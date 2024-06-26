import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "VibeZone", 
      bufferCommands: false,
      connectTimeoutMS: 30000,

    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
