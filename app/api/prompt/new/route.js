import promptsModel from "@models/prompt";
import { connectdb } from "@utils/dbConnection";

export const POST = async (req) => {
  try {
    const { creatorId, tag, prompt } = await req.json();
    let tagData;
    if (!tag.contains("#")) {
      tagData = "#" + tag;
    }
    console.log(tagData);
    await connectdb();
    const newPrompt = await promptsModel.create({
      creator: creatorId,
      prompt,
      tag: tagData,
    });

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
