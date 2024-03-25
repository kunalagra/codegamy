import dbConnect from '@/utils/dbConnect';
import {User} from "@/models/User";
import {UserInfo} from "@/models/UserInfo.js";
import {Queue} from "@/models/Queue.js";

import {peerVideo} from "@/models/PeerVideo.js";
import {peerVideoReview} from "@/models/PeerVideoReview.js";

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"

export async function POST(req) {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const userID = session?.user?._id;
    if (userID){
        const {reviewID, feedback} = await req.json()
        const reviewItem = await peerVideoReview.findById(reviewID)
        reviewItem.feedback = feedback;
        await reviewItem.save()
        const user = await User.findById(reviewItem.reviewer)
        const userdata = await UserInfo.findById(user.userInfo)
        userdata.rating += feedback
        await userdata.save()
        return new Response('User Feedback Added',{status: 201})

    }
    else return new Response('Error',{status: 500})
}