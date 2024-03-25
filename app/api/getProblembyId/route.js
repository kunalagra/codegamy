import {Problem} from "@/models/Problem";
import dbConnect from '@/utils/dbConnect';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"


export async function GET(req) {
    await dbConnect();

    try {
        const session = await getServerSession(authOptions);
        if (session?.user?._id){
          const searchParams = req.nextUrl.searchParams
          const query = searchParams.get('id')
          const problem = await Problem.findOne({id: query})
          return new Response(problem,{status: 200})
        }
      } catch (error) {
        console.error(error);
        return new Response(error,{status: 500}) // Handle any errors
      }
}
