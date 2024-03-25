import {model, models, Schema} from "mongoose";

const SolvedProblemSchema = Schema({
    problem: {
      type: Schema.Types.ObjectId,
      ref: 'Problem',
      required: true
    },
    contest : {
        type: Schema.Types.ObjectId,
        ref: 'Contest',  
    },
    solution: [{
        code: {
            type: String,
            required: true
        },
        complexity: {
            type: [String],
            required: true
        },
        submissionTime: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ['pending', 'accepted', 'rejected'],
            default: 'pending'
        },
        passedTestCases: {type: Number, required: true}
    }],
    
    star: {type: Boolean}
  });

  // Submission.virtual('score', {
  //   get() {
  //     return this.passedTestCases * 100 / this.problem.testCases.length - this.executionTime / 1000;
  //   },
  // });
  
export const SolvedProblem = models?.SolvedProblem || model('SolvedProblem', SolvedProblemSchema);