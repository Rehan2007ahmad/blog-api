const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    role:{
        type: String,
        enum: ['admin', 'user', 'editor'],
        default: 'user',
    },
    password:{
        type: String,
        required: true,
    },
    otp:{
        type: Number,
        required: false,
        default: null
    },
    otpExpires:{
        type: Date,
        required: false,
        default: null
    }
},
{
    timestamps: true
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { id: this._id, role: this.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
    return token;
};  

module.exports = mongoose.model('User', userSchema);