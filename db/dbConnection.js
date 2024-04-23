import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected success");
  } catch (error) {
    console.log(`Errro while db connect ${error.message}`);
  }
};

export default dbConnect;
