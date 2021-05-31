import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middlewares/errorMiddlewares.js';
import connectDB from './config/db.js';
import cors from 'cors';
import * as morgan from 'morgan';

//Routes
import UserRoute from './routes/userRoutes.js';

dotenv.config();
connectDB();
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('combined'));
}
app.use(cors());
app.use(express.json());

app.use('/user', UserRoute);

app.get('/', (req, res) => {
  res.send('index');
});

// Error npm run serverMiddlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
