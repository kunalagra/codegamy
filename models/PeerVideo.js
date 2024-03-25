import {model, models, Schema} from "mongoose";

const peerVideoSchema = Schema({
    question: { type: Schema.Types.ObjectId, ref: 'Question' }, // Reference the peerVideo question
    videoUrl: { type: String, required: true },
    submissionTime: { type: Date, default: Date.now },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'peerVideoReview' }],
});

export const peerVideo = models?.peerVideo || model('peerVideo', peerVideoSchema);
