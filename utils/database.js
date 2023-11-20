import mongoose from "mongoose";

let isConnect = false; // track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery')
}