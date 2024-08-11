import userModel from "@models/users";
import { connectdb } from "@utils/dbConnection";

export const GET = async (req, { params }) => {
    try {
        const { id } = params
        if (!id) {
            return new Response(JSON.stringify("Failed to fetch Profile"), {
                status: 500,
            });
        }
        await connectdb();
        const profile = await userModel.findOne({ _id: id });
        console.log(profile)
        return new Response(JSON.stringify(profile), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Failed to fetch user Profile"), {
            status: 500,
        });
    }
}
