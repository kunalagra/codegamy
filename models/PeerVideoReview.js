import {model, models, Schema} from "mongoose";

const peerVideoReviewSchema = Schema({
    reviewer: { type: Schema.Types.ObjectId, ref: 'User' }, 
    peerVideo: { type: Schema.Types.ObjectId, ref: 'peerVideo' }, 
    rating: { type: Number }, 
    comment: { type: String}, 
    reviewTime: { type: Date },
    feedback: Number
});

export const peerVideoReview = models?.peerVideoReview || model('peerVideoReview', peerVideoReviewSchema);