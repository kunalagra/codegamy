import {Problem} from "@/models/Problem";
import dbConnect from '@/utils/dbConnect';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"

// export async function POST(req) {
//     await dbConnect();

//     try {

//         const newProblem = new Problem(await req.json());
//         await newProblem.save(); // Save the problem to the database
//         return new Response('Problem Added',{status: 201})
//       } catch (error) {
//         console.error(error);
//         return new Response(error,{status: 500}) // Handle any errors
//       }
// }

export async function GET() {
    await dbConnect();
    try {
          const problems = await Problem.find();
          return new Response(JSON.stringify(problems),{status: 200})
      } catch (error) {
        console.error(error);
        return new Response(error,{status: 500}) // Handle any errors
      }
}
