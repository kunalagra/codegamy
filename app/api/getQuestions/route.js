import {Question} from "@/models/Question";
import dbConnect from '@/utils/dbConnect';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"

export async function GET() {
    await dbConnect();

    try {
        const getRandQs = await Question.aggregate([
          { $sample: { size: 1 } }
        ]);

        return new Response(JSON.stringify(getRandQs), {status: 200})
    }catch (error) {  
        console.error(error);
        return new Response(error,{status: 500})
      }
}
