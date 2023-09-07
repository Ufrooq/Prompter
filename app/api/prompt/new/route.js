import promptsModel from "@models/prompt";
import { connectdb } from "@utils/dbConnection";

export const POST = async (req) => {
  try {
    const { creatorEmail, tag, prompt } = await req.json();
    await connectdb();
    const newPrompt = await promptsModel.create({
      creator: creatorEmail,
      prompt,
      tag,
    });

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
