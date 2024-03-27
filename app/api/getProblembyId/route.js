import {Problem} from "@/models/Problem";
import dbConnect from '@/utils/dbConnect';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"


export async function GET(req) {
    await dbConnect();

    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('id')
    const problem = await Problem.findOne({id: query})
    return new Response(JSON.stringify(problem),{status: 200})

}
