import { connectToDB } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (request) => {
  try {
    await connectToDB();
    const posts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};