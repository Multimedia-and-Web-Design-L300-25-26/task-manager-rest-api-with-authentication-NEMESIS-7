import mongoose from "mongoose";
import dotenv from "dotenv";

export default async function () {
  dotenv.config();
  await mongoose.connect(process.env.MONGO_URI);
  const collections = await mongoose.connection.db.collections();
  for (const collection of collections) {
    await collection.deleteMany({});
  }
  await mongoose.disconnect();
}
