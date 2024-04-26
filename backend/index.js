import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/User-routes.js';
import adminRouter from './routes/Admin-routes.js';
import movieRouter from './routes/Movies-routes.js';
import bookingsRouter from './routes/Booking-routes.js';
import cors from 'cors';
dotenv.config();


const app = express();


app.use(express.json());
app.use(cors());

//middlewares

app.use('/user',userRouter);
app.use('/admin',adminRouter);
app.use('/movie',movieRouter);
app.use('/booking',bookingsRouter)



mongoose.connect(
    `mongodb+srv://amrith737:${process.env.MongoDB_Password}@moviebooking.sc6vusk.mongodb.net/?retryWrites=true&w=majority&appName=Moviebooking`
)
.then(()=>
    app.listen(7120,() =>
    console.log("Connected to Database and Server is running....")
    )
)
.catch((e) => console.log(e));



// app.use("/", (req,res,next) => {
//     res.send("Hi");
// });



// app.listen(7120, () => {
//     console.log("Server Running...");
// })