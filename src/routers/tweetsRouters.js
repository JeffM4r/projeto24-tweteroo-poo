import express from 'express';
import TweetsControllers from '../controllers/tweetsControllers.js';

const tweetsRouter = express.Router()

tweetsRouter.post('/tweets', TweetsControllers.sendTweet)
tweetsRouter.get('/tweets/:username', TweetsControllers.getUserTweets)
tweetsRouter.get('/tweets', TweetsControllers.getTweets)

export default tweetsRouter;     