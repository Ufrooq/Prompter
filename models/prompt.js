import { Schema, model, models } from "mongoose";

const promptsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "prompt is required!"],
  },
  tag: {
    type: String,
    required: [true, "tag is required!"],
  },
  image: {
    type: String,
  },
});

const promptsModel = models.prompts || model("prompts", promptsSchema);
export default promptsModel;
