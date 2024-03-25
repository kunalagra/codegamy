import {model, models, Schema} from "mongoose";

const CourseSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    modules: [
      {
        id: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        }, 
        description: {
          type: String,
          required: true,
        },
        lessons: [
          {
            title: {
              type: String,
              required: true,
            },
            content: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  });
  
export const Course = models?.Course || model('Course', CourseSchema);