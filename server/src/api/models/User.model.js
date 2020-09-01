const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        uppercase: true,
        required: true,
        trim: true
    },
    user: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    is_admin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

exports.UserModel = mongoose.model('User', UserSchema);