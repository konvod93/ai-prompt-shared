import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { userId, promp, tag } = await req.JSON();

    try {
        await connectToDB();
    } catch (error) {
        
    }
}