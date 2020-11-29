import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    creatorId: {
        type: String,
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
}, { timestamp: true });

const ContentModel = mongoose.model('Content', schema);

export default ContentModel;