import promptsModel from "@models/prompt";
import { connectdb } from "@utils/dbConnection";

export const GET = async () => {
  try {
    await connectdb();
    const allPrompts = await promptsModel.find({});
    return Response(JSON.stringify(allPrompts), { status: 200 });
  } catch (error) {
    return Response(JSON.stringify("Failed to fetch posts"), { status: 500 });
  }
};
