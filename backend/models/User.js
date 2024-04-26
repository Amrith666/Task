import mongoose from 'mongoose';
// 1. Create a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required:true,
        unique: true,
        minLength: 6,
    },
    bookings:[{type: mongoose.Types.ObjectId, ref: "Booking"}],
})

// 2. Export the model
const  User = mongoose.model('User', userSchema);
export default User;
