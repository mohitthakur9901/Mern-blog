import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import authRouter from './routes/authRoute.js'
import cors from "cors";
import postRouter from './routes/post.route.js'
import commentRouter from './routes/commentRoutes.js'




mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Error connecting to MongoDB", err);
})

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/blog-front-end/dist')));

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname, 'blog-front-end' ,'dist', 'index.html'));
})

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use('/api/user' ,userRouter);
app.use('/api/auth' , authRouter);
app.use('/api/post',postRouter);
app.use('/api/comment', commentRouter);




app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

