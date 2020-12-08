import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Id pembuat harus disertakan'],
    },
    title: {
        type: String,
        required: [true, "Mohon masukkan judul"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Mohon masukkan deskripsi"],
        trim: true
    },
    mediaUrls: {
        type: Array,
        default: [],
    },
    sharedBy: {
        type: Array,
        default: [],
    }
}, { timestamps: true });

schema.statics.addContent = async function (contentData) {
    await this.create(contentData);
    let contentList = await this.find({ creatorId: contentData.creatorId });
    return contentList;
};

schema.statics.getPersonalStories = async function (userId, queryCondition) {
    let contentList = await this
        .find({ $or: queryCondition })
        .populate({ path: 'creatorId', select: '-password' })
        .sort({ createdAt: 'descending' });
    let normalizedList = JSON.parse(JSON.stringify(contentList));
    return normalizedList.map(item => {
        item.isAlreadySharedByUser = item.sharedBy.includes(userId);
        return item;
    });
}

const ContentModel = mongoose.model('Content', schema);

export default ContentModel;