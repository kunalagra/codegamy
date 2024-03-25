import dbConnect from '@/utils/dbConnect';
import {Problem} from "@/models/Problem";
import {User} from "@/models/User";
import {UserInfo} from "@/models/UserInfo.js";

import {SolvedProblem} from "@/models/SolvedProblem";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"

export async function POST(req) {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const userID = session?.user?._id;
    if (userID){

        const {code,problem,language,contest} = await req.json()
        // console.log(code,problem,language,contest)
        const user = await User.findById(userID)
        const userdata = await UserInfo.findById(user.userInfo).populate('solved')
        const prob = await Problem.findOne({id: problem})
        const existingSolvedProblem = userdata.solved.find(
            (solvedProblem) => solvedProblem.problem.equals(prob._id) 
        );
        const res = await fetch('https://jdoodle2.p.rapidapi.com/v1',{
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
                "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
            },
            body: JSON.stringify({
                language: language,
                version: "latest",
                code: code,
                input: prob.testCases[0].input[0],
            }),
        })
        const data = await res.json()
        let tcPass;
        let isAccepted;
        if (data.output===prob.testCases[0].output[0]){
            tcPass = 1
            isAccepted = "accepted"
        }
        else{
            tcPass = 0
            isAccepted = "rejected"

        }
        const newSolution = {
            contest: contest !== null ? contest : undefined,
            code: code,
            complexity: [data.cpuTime, data.memory],
            status: isAccepted,
            passedTestCases: tcPass
        };
        if (existingSolvedProblem){
            existingSolvedProblem.solution.push(newSolution);
            existingSolvedProblem.save();      
            return new Response(JSON.stringify({isAccepted, output: data.output}),{status: 201})      
        }
        else{
            if ((isAccepted && contest) || !contest){
                const newSolve = new SolvedProblem(
                    {
                        contest: contest !== null ? contest : undefined,
                        problem: prob._id,
                        solution: [newSolution]
                        
                    }
                )
                const newSol = await newSolve.save()
                userdata.solved.push(newSol.id)
                userdata.save()
                return new Response(JSON.stringify({isAccepted, output: data.output}),{status: 201})    
            }
            else{
                return new Response('Testcase Failed', {status: 400})
            }
        }
        
    }
    return new Response('User Not Found',{status: 401})
}