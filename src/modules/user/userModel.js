import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  mobileNumber: String,
  password: String,
});

export default model("User", userSchema);
