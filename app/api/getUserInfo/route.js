import dbConnect from "@/utils/dbConnect";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"
import { UserInfo } from "@/models/UserInfo.js";
import {User} from "@/models/User";

export async function GET() {
    await dbConnect();

      const session = await getServerSession(authOptions);
      if (session?.user?._id){
        const user = await User.findById(session?.user?._id)
        const data = await UserInfo.findById(user.userInfo )
        return new Response(JSON.stringify(data), {status: 200})
      } 
      else return new Response("User not logged in")
}