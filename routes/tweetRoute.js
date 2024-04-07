import express from "express";
import { LikeOrDislike, createTweet, deleteTweet, getAllTweets ,getFollowingTweets} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router=express.Router();
router.route("/create").post(createTweet);
router.route("/delete/:id").delete( deleteTweet);
router.route("/like/:id").put( LikeOrDislike);
router.route("/alltweets/:id").get(getAllTweets);
router.route("/followingtweets/:id").get( getFollowingTweets);
export default router;