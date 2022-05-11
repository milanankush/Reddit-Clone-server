import mongoose from "mongoose";

const Community = mongoose.model(
  "Community",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    cover: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: true,
    },
  })
);

export default Community;
