import promptsModel from "@models/prompt";
import { connectdb } from "@utils/dbConnection";

export const GET = async (request, { params }) => {
  console.log("profile data fetc backedn");
  try {
    await connectdb();
    const allPrompts = await promptsModel
      .find({
        creator: params.id,
      })
      .populate("creator");
    return new Response(JSON.stringify(allPrompts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch posts"), {
      status: 500,
    });
  }
};
