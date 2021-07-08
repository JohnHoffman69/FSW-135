const express = require("express");
const commentsRouter = express.Router();
const Comments = require("../models/comments");

//POST ONE
commentsRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newComments = new Comments(req.body);
  newComments.save((err, savedComments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedComments);
  });
});

//GET ALL
commentsRouter.get("/", (req, res, next) => {
  Comments.find((err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comments);
  });
});

//GET ALL COMMENTS BY USER
commentsRouter.get("/user", (req, res, next) => {
  Comments.find({user: req.user._id}, (err, comments) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

//GET ONE
commentsRouter.get("/:commentsId", (req, res, next) => {
  Comments.findOne({ _id: req.params.commentsId }, (err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comments);
  });
});

//EDIT ONE
commentsRouter.put("/:commentsId", (req, res, next) => {
  Comments.findOneAndUpdate(
    { _id: req.params.commentsId },
    req.body,
    { new: true },
    (err, updatedComments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedComments);
    }
  );
});

// DELETE ONE
commentsRouter.delete("/:commentsId", (req, res, next) => {
  Comments.findOneAndDelete(
    { _id: req.params.commentsId },
    (err, deletedComments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(
          `Successfully deleted item ${deletedComments.subject} from the database`
        );
    }
  );
});

module.exports = commentsRouter;