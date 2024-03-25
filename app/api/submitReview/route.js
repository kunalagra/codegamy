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
        const {queueID,rating,comment} = await req.json()
        const queueItem = await Queue.findById(queueID)
        const review = new peerVideoReview(
            {
                reviewer: userID,
                peerVideo: queueItem.peerVideo,
                rating: rating,
                comment: comment,
                reviewTime: Date.now()
            }
        )
        const savedreview = await review.save()
        const user = await User.findById(userID)
        const userdata = await UserInfo.findById(user.userInfo)

        await userdata.reviews.push(savedreview._id)
        await userdata.assigned.pull(queueID)
        await userdata.save();

        const peervideoitem = await peerVideo.findById(queueItem.peerVideo)
        await peervideoitem.reviews.push(savedreview._id)
        await peervideoitem.save();
        return new Response('User Data Updated',{status: 201})

    }
    else return new Response('Error',{status: 500})
}