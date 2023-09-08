import { Schema, model, models } from "mongoose";

const promptsSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  prompt: {
    type: String,
    required: [true, "prompt is required!"],
  },
  tag: {
    type: String,
    required: [true, "tag is required!"],
  },
});

const promptsModel = models.prompts || model("prompts", promptsSchema);
export default promptsModel;
