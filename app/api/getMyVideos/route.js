import dbConnect from '@/utils/dbConnect';
import {User} from "@/models/User";
import {UserInfo} from "@/models/UserInfo.js";

import {peerVideo} from "@/models/PeerVideo.js";
import {peerVideoReview} from "@/models/PeerVideoReview.js";
import {Question} from "@/models/Question.js";

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"

export async function GET() {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const userID = session?.user?._id;
    if (userID){
        const user = await User.findById(userID)
        const userdata = await UserInfo.findById(user.userInfo).populate({
            path : 'peerVideo',
            populate : 
              ['question','reviews']
            
          })
        
        const temp = userdata.peerVideo
        const data = temp.filter((data) => { 
          if (data.reviews.length >= 2 && userdata.assigned.length===0) {
              return true; 
          } else {
              data.reviews = [];
              return true; 
          }

        });

        return new Response(JSON.stringify(data),{status: 200})
    }
    else  return new Response("Error",{status: 500})

}
