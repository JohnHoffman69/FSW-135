const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issue");

//POST ONE
issueRouter.post("/", (req, res, next) => {
  req.body.username = req.username._id
  const newIssue = new Issue(req.body);
  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedIssue);
  });
});

//GET ALL
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issue);
  });
});

//GET ONE
issueRouter.get("/:issueId", (req, res, next) => {
  Issue.findOne({ _id: req.params.issueId }, (err, issue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issue);
  });
});

//EDIT ONE
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedIssue);
    }
  );
});

// DELETE ONE
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete({ _id: req.params.issueId }, (err, deletedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res
      .status(200)
      .send(`Successfully deleted item ${deletedIssue.subject} from the database`);
  });
});

module.exports = issueRouter;