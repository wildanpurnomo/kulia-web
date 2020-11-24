import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    creatorId: {
        type: String,
        required: [true, "creatorId harus ada"],
    },
    contentId: {
        type: String,
        required: [true, "contentId harus ada"],
    },
    mediaUrl: {
        type: String,
        required: [true, "mediaUrl harus ada"],
    },
    mediaType: {
        type: String,
        required: [true, "mediaType harus ada"],
    },
    mediaOriginalName: {
        type: String,
        required: [true, "mediaOriginalName harus ada"]
    }
}, { timestamps: true });

const StorageModel = mongoose.model('Storage', schema);

module.exports = StorageModel;