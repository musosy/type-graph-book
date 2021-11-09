import mongoose from 'mongoose';

export default mongoose.model('book', new mongoose.Schema({
        title: {
            type: String,
            required: true,
            unique: true
        },
        summary: String,
        author: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'author',
            required: true
        }
    })
)