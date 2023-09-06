import { connectdb } from "@utils/dbConnection";

export const POST = async (req, res) => {
  try {
    const { userId, prompt, tag } = await req.json();
    await connectdb();
  } catch (error) {}
};
