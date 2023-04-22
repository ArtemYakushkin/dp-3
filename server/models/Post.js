import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        title: { type: String, required: true },
        text: { type: String, required: true },
        imgUrl: { type: String, default: '' },
        views: { type: Number, default: 0 },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
        likes: { type: Map, of: Boolean },
        userPicturePath: { type: String },
    },
    { timestamps: true },
);

export default mongoose.model('Post', PostSchema);