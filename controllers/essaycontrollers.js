import mongoose from "mongoose";
import { EssaySchema } from "../models/essaymodel";

const Essay = mongoose.model("Essay", EssaySchema);

export const addNewEssay = (req, res) => {
  let newEssay = new Essay(req.body);

  newEssay.save((err, Essay) => {
    if (err) {
      res.send(err);
    }
    res.json(Essay);
  });
};

export const getEssays = (req, res) => {
  Essay.find({}, (err, Essay) => {
    if (err) {
      res.send(err);
    }
    res.json(Essay);
  });
};

export const getEssayWithID = (req, res) => {
  Essay.findById(req.params.EssayId, (err, Essay) => {
    if (err) {
      res.send(err);
    }
    res.json(Essay);
  });
};

export const UpdateEssay = (req, res) => {
  EssayfindOneAndUpdate(
    { _id: req.params.EssayId },
    req.body,
    { new: true },
    (err, Essay) => {
      if (err) {
        res.send(err);
      }
      res.json(Essay);
    }
  );
};

export const deleteEssay = (req, res) => {
  Essay.deleteOne({ _id: req.params.EssayId }, (err, Essay) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted essay" });
  });
};
