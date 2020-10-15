import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EssaySchema = new Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
