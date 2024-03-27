import {model, models, Schema} from "mongoose";

const ContestSchema = Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    problems: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Problem' 
    }],
    ranklist: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'UserInfo'
            },
            score: {
                type: Number,
                default: 0
            },
            finish_time: {
                type: Date,
                default: Date.now
            }
        }
    ]

})

export const Contest = models?.Contest || model('Contest', ContestSchema);