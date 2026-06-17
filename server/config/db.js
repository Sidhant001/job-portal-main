import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ Database Connected");
    console.log("State:", mongoose.connection.readyState);

  } catch (error) {
    console.log("❌ DB Error:", error);
  }
};

export default connectDB;