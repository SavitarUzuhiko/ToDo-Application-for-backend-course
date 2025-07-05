const { connect } = require("mongoose");

const configDB = async () => {
  try {
    await connect(process.env.MONGO_URI || "mongodb://localhost:27017/todoapp");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

module.exports = configDB;