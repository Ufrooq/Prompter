import promptsModel from "@models/prompt";
import { connectdb } from "@utils/dbConnection";

// get route
export const GET = async (request, { params }) => {
  try {
    await connectdb();
    if (!params) {
      return new Response(JSON.stringify("Failed to fetch the post"), {
        status: 500,
      });
    }
    const prompt = await promptsModel.findById(params.id);
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch post"), {
      status: 500,
    });
  }
};

// update route
export const PATCH = async (request, { params }) => {
  try {
    const { updatedPrompt, updatedTag } = await request.json();
    await connectdb();
    if (!params) {
      return new Response(JSON.stringify("Failed to update the post"), {
        status: 500,
      });
    }
    const existingPrompt = await promptsModel.findById(params.id);
    if (!existingPrompt) {
      return new Response(JSON.stringify("Failed to update the post"), {
        status: 500,
      });
    }
    existingPrompt.prompt = updatedPrompt;
    existingPrompt.tag = updatedTag;
    await existingPrompt.save;
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to update the post"), {
      status: 500,
    });
  }
};

// delete route
export const DELETE = async (request, { params }) => {
  try {
    await connectdb();
    if (!params) {
      return new Response(JSON.stringify("Failed to delete the post"), {
        status: 500,
      });
    }
    await promptsModel.findByIdAndDelete(params.id);
    return new Response(JSON.stringify("prompt successfully deleted"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Failed to delete the post"), {
      status: 500,
    });
  }
};
