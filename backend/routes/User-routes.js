import express from 'express';
import getAllUsers , { deleteUser, getBookingsOfUser, login, signup, updateUser } from '../controllers/User-controller.js';

const userRouter = express.Router();

// userRouter.get('/', (req, res) => {
//     res.send('Hello World!');
// });

userRouter.get('/',getAllUsers);
userRouter.post('/signup', signup);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

userRouter.post('/login', login)    
userRouter.get('/bookings/:id', getBookingsOfUser)

export default userRouter;