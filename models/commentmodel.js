import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CommentSchema = new Schema({
  author: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  },

  essay: {
    type: String,
    required: true
  },

  topic: {
    type: String,
    required: true
  },

  essayAuthor: {
    type: String,
    required: true
  },

  created_date: {
    type: Date,
    default: Date.now
  }
});
