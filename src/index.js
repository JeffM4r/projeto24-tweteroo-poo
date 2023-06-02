import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import tweetsRouter from './routers/tweetsRouters.js';
import authRouter from './routers/authRouters.js';

const app = express();

app.use(cors());
app.use(json());

app.use(authRouter)
app.use(tweetsRouter)


app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
