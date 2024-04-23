import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    receiverId: {
      type: String,
    },
    type: {
      type: String,
    },
    text: {
      type: String,
    },
    imageName: {
      type: String,
      default: "img-name",
    },
  },
  { timestamps: true }
);

export default mongoose.model("message", MessageSchema);
