import { query } from 'express';
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    contentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: [true, 'Id konten harus disertakan'],
    },
    sharerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Id pembagi harus disertakan'],
    },
    caption: {
        type: String,
        default: "",
    }
}, { timestamps: true });

schema.statics.getPersonalStories = async function (queryCondition) {
    let sharedList = await this
        .find({ $or: queryCondition })
        .populate({ path: 'contentId', populate: { path: 'creatorId', select: '-password' } })
        .populate({ path: 'sharerId', select: '-password' })
        .sort({ createdAt: 'descending' });
    return sharedList;
}

schema.statics.addShared = async function (sharedData) {

};

const SharedModel = mongoose.model('Shared', schema);

export default SharedModel;