import mongoose from "mongoose";

const converSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("conversation", converSchema);
