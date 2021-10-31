var express = require("express");
const auth = require("../middlewares/AuthMiddleware");
const { FriendController } = require("../controllers/FriendController");
var friendsRouter = express.Router();

/* Get Friend Requests */
friendsRouter.get("/requests", auth, FriendController.get);

/* Send Friend Request */
friendsRouter.post("/requests", auth, FriendController.create);

/* Accept Friend Request */
friendsRouter.patch("/requests/accept", auth, FriendController.accept);

/* Decline Friend Request */
friendsRouter.patch("/requests/reject", auth, FriendController.decline);

/* Get Friends */
friendsRouter.get("/", auth, FriendController.getFriends);

module.exports = friendsRouter;
