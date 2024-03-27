import {User} from "@/models/User.js";
import {UserInfo} from "@/models/UserInfo.js";
import {Queue} from "@/models/Queue.js";
import {peerVideo} from "@/models/PeerVideo.js";
import {question} from "@/models/Question.js";

import dbConnect from '@/utils/dbConnect';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"


export async function GET() {
    await dbConnect();

    try {
        const session = await getServerSession(authOptions);
        const userID = session?.user?._id
        if (session?.user?._id){
            const user = await User.findById(userID)
            const userdata = await UserInfo.findById(user.userInfo).populate({
                path : 'assigned',
                populate : {
                  path : 'peerVideo',
                    populate : {
                        path : 'question',
                  }
                }
              })
            const res = {
                assigned: userdata.assigned,
                assignedTime: userdata.assignedTime

            }
            

          return new Response(JSON.stringify(res),{status: 200})
        }
      } catch (error) {
        // console.error(error);
        return new Response(error,{status: 500}) // Handle any errors
      }
}
