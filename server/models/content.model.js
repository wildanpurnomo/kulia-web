import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Id konten harus disertakan'],
        unique: true,
     },
    creatorId: {
        type: String,
        required: [true, 'Id pembuat harus disertakan'],
        unique: true,
    },
    title: {
        type: String,
        required: [true, "Mohon masukkan username"],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Mohon masukkan password"],
    },
    mediaUrls: {
        type: Array,
        default: [],
    },
}, { timestamp: true });

const ContentModel = mongoose.model('Content', schema);

export default ContentModel;