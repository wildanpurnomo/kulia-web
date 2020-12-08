import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { ErrorHandler } from '../libs/error.lib';
import escapeStringRegexp from 'escape-string-regexp';
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
const additionalPointsPerShare = 10;

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Mohon masukkan email'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [emailRegex, 'Alamat email tidak valid']
    },
    username: {
        type: String,
        required: [true, "Mohon masukkan username"],
        unique: true,
        trim: true,
        minlength: [6, "Username minimal 6 karakter"]
    },
    profilePicUrl: {
        type: String,
        required: [true, "Mohon masukkan foto profil"]
    },
    password: {
        type: String,
        required: [true, "Mohon masukkan password"],
        minlength: [8, "Password minimal 8 karakter"],
        match: [passwordRegex, "Password harus mengandung minimal 1 huruf kecil, 1 huruf besar dan 1 angka"]
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

schema.statics.discoverOtherUsers = async function (userId, usernameQuery) {
    let user = await this.findById(userId);
    let $regex = escapeStringRegexp(usernameQuery.split("%20").join(""));
    let userList = await UserModel.find({ username: { $regex } }).select('-password');
    let normalizedList = JSON.parse(JSON.stringify(userList));
    return normalizedList.map(item => {
        item.isFollowedByUser = user.followingIds.includes(item._id) ? true : false;
        return item;
    });
}

schema.statics.getFollowingList = async function (userId) {
    let user = await this.findById(userId);
    let queryCondition = [];
    user.followingIds.forEach(item => {
        queryCondition.push({
            _id: item
        });
    });
    let followingList = queryCondition.length === 0 ? [] : await this.find({ $or: queryCondition }).select('-password');
    return followingList;
}

schema.statics.followOtherUser = async function (userId, followingId) {
    let user = await this.findById(userId);
    if (!user.followingIds.includes(followingId)) {
        user.followingIds.push(followingId);
        await this.findOneAndUpdate({ _id: userId }, { followingIds: user.followingIds });
    }
    let queryCondition = [];
    user.followingIds.forEach(item => {
        queryCondition.push({
            _id: item
        });
    });
    let newFollowingList = queryCondition.length === 0 ? [] : await this.find({ $or: queryCondition }).select('-password');
    return newFollowingList;
}

schema.statics.unfollowOtherUser = async function (userId, unfollowingId) {
    let user = await this.findById(userId);
    if (user.followingIds.includes(unfollowingId)) {
        user.followingIds = user.followingIds.filter(item => {
            return item !== unfollowingId
        });
        await this.findOneAndUpdate({ _id: userId }, { followingIds: user.followingIds });
    }
    let queryCondition = [];
    user.followingIds.forEach(item => {
        queryCondition.push({
            _id: item
        });
    });
    let newFollowingList = queryCondition.length === 0 ? [] : await this.find({ $or: queryCondition }).select('-password');
    return newFollowingList;
}

schema.statics.alterPassword = async function (userId, oldPassword, newPassword) {
    let user = await this.findById(userId);
    if (user) {
        let isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

        if (!isPasswordMatch) {
            throw new ErrorHandler('Password lama salah');
        } else if (!isValidField(newPassword, passwordRegex)) {
            throw new ErrorHandler('Password tidak valid');
        } else {
            let salt = await bcrypt.genSalt();
            let hashed = await bcrypt.hash(newPassword, salt);
            let userData = await this.findOneAndUpdate({ _id: userId }, { password: hashed }, { new: true }).select('-password');
            return userData;
        }
    } else {
        throw new ErrorHandler('User tidak ditemukan');
    }
}

schema.statics.alterProfile = async function (userId, email, username) {
    let user = await this.findById(userId);
    if (user) {
        if (!isValidField(email, emailRegex)) {
            throw new ErrorHandler('Email tidak valid');
        } else if (!isValidUsername(username)) {
            throw new ErrorHandler('Username minimal 6 karakter');
        } else {
            let userData = await this.findOneAndUpdate({ _id: userId }, { email: email, username: username }, { new: true }).select('-password');
            return userData;
        }
    } else {
        throw new ErrorHandler('User tidak ditemukan');
    }
}

schema.statics.updatePoints = async function (userId) {
    let user = await this.findById(userId);
    if (user) {
        await this.findOneAndUpdate({ _id: userId }, { points: user.points + additionalPointsPerShare });
        return true;
    } else {
        throw new ErrorHandler('Author tidak ditemukan');
    }
}

const isValidField = (value, regex) => {
    return value.match(regex);
}

const isValidUsername = (username) => {
    return username.length > 6;
}

const UserModel = mongoose.model('User', schema);

export default UserModel;