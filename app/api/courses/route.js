import { Course } from "@/models/Course";
import dbConnect from '@/utils/dbConnect';

export async function POST(req) {
  const body = await req.json();
  await dbConnect();
  const createdCourse = await Course.create(body);
  return Response.json(createdCourse);
}

export async function GET() {
  await dbConnect();
  const courses = await Course.find({});
  return Response.json(courses);
}