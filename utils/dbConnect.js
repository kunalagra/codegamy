import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URL;

let cachedDb = null;

async function dbConnect() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);

    cachedDb = db;
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Unable to connect to MongoDB');
  }
}

export default dbConnect;
