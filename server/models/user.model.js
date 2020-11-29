import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { ErrorHandler } from '../libs/error.lib';

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Mohon masukkan email'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Alamat email tidak valid']
    },
    username: {
        type: String,
        required: [true, "Mohon masukkan username"],
        unique: true,
        trim: true,
    },
    profilePicUrl: {
        type: String,
        required: [true, "Mohon masukkan foto profil"]
    },
    password: {
        type: String,
        required: [true, "Mohon masukkan password"],
    },
    points: {
        type: Number,
        default: 0,
    },
    followingIds: {
        type: Array,
        default: []
    }
}, { timestamps: true });

schema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

schema.statics.login = async function (username, password) {
    let user = await this.findOne({ username });
    if (user) {
        let isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            return user;
        } else {
            throw new ErrorHandler('Kombinasi username & password tidak sesuai');
        }
    } else {
        throw new ErrorHandler('User tidak ditemukan');
    }
}

schema.statics.getFollowingList = async function(userId) {
    let user = await this.findById(userId);
    let queryCondition = [];
    user.followingIds.forEach(item => {
        queryCondition.push({
            _id: item
        });
    });
    let followingList = await this.find({ $and: queryCondition });
    return followingList;
}

schema.statics.followOtherUser = async function (userId, followingId) {
    let user = await this.findById(userId);
    let newFollowingIds = user.followingIds.push(followingId);
    await this.findOneAndUpdate({ _id: userId }, { followingIds: newFollowingIds });
    let queryCondition = [];
    newFollowingIds.forEach(item => {
        queryCondition.push({
            _id: item
        });
    });
    let newFollowingList = await this.find({ $and: queryCondition });
    return newFollowingList;
}

schema.statics.alterPassword = async function (userId, oldPassword, newPassword) {
    let user = await this.findById(userId);
    if (user) {
        let isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
        if (isPasswordMatch) {
            let salt = await bcrypt.genSalt();
            let hashed = await bcrypt.hash(newPassword, salt);
            let userData = await this.findOneAndUpdate({ _id: userId }, { password: hashed }, { new: true });
            return userData;
        } else {
            throw new ErrorHandler('Password lama salah');
        }
    } else {
        throw new ErrorHandler('User tidak ditemukan');
    }
}

const UserModel = mongoose.model('User', schema);

export default UserModel;