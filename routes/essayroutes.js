import {
  addNewEssay,
  getEssays,
  getEssayWithID,
  UpdateEssay,
  deleteEssay
} from "../controllers/essaycontrollers";

import {
  addNewComment,
  getComments,
  getCommentWithID,
  UpdateComment,
  deleteComment
} from "../controllers/commentcontroller";

const routes = app => {
  app
    .route("/essays")
    // GET endpoint
    .get(getEssays)
    // POST endpoint
    .post(addNewEssay);
  app
    .route("/comment")
    // GET endpoint
    .get(getComments)

    // POST endpoint
    .post(addNewComment);

  app
    .route("/essay/:EssayId")
    // Get specific player
    .get(getEssayWithID)

    // update a specific player
    .put(UpdateEssay)

    // update a specific player
    .delete(deleteEssay);

  app
    .route("/comment/:CommentId")
    // Get specific player
    .get(getCommentWithID)

    // update a specific player
    .put(UpdateComment)

    // update a specific player
    .delete(deleteComment);
};

export default routes;
