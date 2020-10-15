import mongoose from "mongoose";
import { CommentSchema } from "../models/commentmodel";

const Comment = mongoose.model("Comment", CommentSchema);

export const addNewComment = (req, res) => {
  let newComment = new Comment(req.body);

  newComment.save((err, Comment) => {
    if (err) {
      res.send(err);
    }
    res.json(Comment);
  });
};

export const getComments = (req, res) => {
  Comment.find({}, (err, Comment) => {
    if (err) {
      res.send(err);
    }
    res.json(Comment);
  });
};

export const getCommentWithID = (req, res) => {
  Comment.findById(req.params.CommentId, (err, Comment) => {
    if (err) {
      res.send(err);
    }
    res.json(Comment);
  });
};

export const UpdateComment = (req, res) => {
  Comment.findOneAndUpdate(
    { _id: req.params.CommentId },
    req.body,
    { new: true },
    (err, Comment) => {
      if (err) {
        res.send(err);
      }
      res.json(Comment);
    }
  );
};

export const deleteComment = (req, res) => {
  Comment.deleteOne({ _id: req.params.CommentId }, (err, Comment) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted comment" });
  });
};
