import promptsModel from "@models/prompt";
import { connectdb } from "@utils/dbConnection";

export const GET = async (request, { params }) => {
  try {
    await connectdb();
    if (!params) {
      return new Response(JSON.stringify("Failed to fetch the post"), {
        status: 500,
      });
    }
    const prompt = await promptsModel.findById(params.id).populate("creator");
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch post"), {
      status: 500,
    });
  }
};
export const PATCH = async (request, { params }) => {
  try {
    const { updatedPrompt, updatedTag } = await request.json();
    await connectdb();
    if (!params) {
      return new Response(JSON.stringify("Failed to fetch the post"), {
        status: 500,
      });
    }
    const prompt = await promptsModel.findById(params.id).populate("creator");
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch post"), {
      status: 500,
    });
  }
};
