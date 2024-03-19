import User from "./userModel.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config/config.js";

const register = async ({ name, mobileNumber, password }) => {
  // Check if the mobile number is already registered
  const existingUser = await User.findOne({ mobileNumber });
  if (existingUser) {
    throw new Error("Mobile number is already registered");
  }

  // Hash the password
  const hashedPassword = await hash(password, 10);

  // Create new user
  const user = new User({ name, mobileNumber, password: hashedPassword });
  await user.save();

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, jwtSecret, {
    expiresIn: "1d",
  });

  console.log("token", token, atob(token));

  return { user, token };
};

const login = async ({ mobileNumber, password }) => {
  const user = await User.findOne({ mobileNumber });
  if (!user) {
    throw new Error("Invalid mobile number or password");
  }

  const isValidPassword = await compare(password, user.password);
  if (!isValidPassword) {
    throw new Error("Invalid mobile number or password");
  }

  const token = jwt.sign({ userId: user._id }, jwtSecret, {
    expiresIn: "1d",
  });

  return { user, token };
};

export default { register, login };
