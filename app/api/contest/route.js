import dbConnect from '@/utils/dbConnect';
import { Contest } from "@/models/Contest";
import { UserInfo } from "@/models/UserInfo";
import { Problem } from "@/models/Problem";
import { SolvedProblem } from "@/models/SolvedProblem";


export async function POST(req) {
    await dbConnect();
    const body = await req.json();
    const createdContest = await Contest.create(body);
    return new Response(createdContest);
    }

export async function GET() {
    await dbConnect();
    const contests = await Contest.find({});
    return Response(contests);
}

export async function PUT(req) {
    await dbConnect();
    const body = await req.json();
    const contest = await Contest.findOne({id : body.id});
    const user = await UserInfo.findOne({id : body.user});
    const problem = await Problem.findOne({id : body.problem});
    const solvedProblem = await SolvedProblem.findOne({problem : problem._id, contest : contest._id});
    const ranklist = contest.ranklist;
    let userIndex = -1;
    for (let i = 0; i < ranklist.length; i++) {
        if (ranklist[i].user == user._id) {
            userIndex = i;
            break;
        }
    }
    if (userIndex == -1) {
        ranklist.push({
            user: user._id,
            score: body.score,
            finish_time: contest.start - solvedProblem.solution[0].submissionTime
        });
    }
    else {
        ranklist[userIndex].score += body.score;
        ranklist[userIndex].finish_time += contest.start - solvedProblem.solution[0].submissionTime;
    }
    await Contest.updateOne({id : body.id}, {ranklist : ranklist});
    return new Response(contest);
}