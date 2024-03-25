import {model, models, Schema} from "mongoose";

const QuestionSchema = Schema({
    id: {type: Number},
    question: { type: String, required: true },
    tags: [String],
    expected: String
});

export const Question = models?.Question || model('Question', QuestionSchema);
