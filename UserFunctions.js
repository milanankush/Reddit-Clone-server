import User from "./models/User.js";
import jwt from "jsonwebtoken";
// const secret = "secret123";
export function getUserFromToken(token) {
  const userInfo = jwt.verify(token, process.env.SECRET);
  return User.findById(userInfo.id);
}
