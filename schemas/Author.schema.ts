import mongoose from 'mongoose';

export default mongoose.model('author', new mongoose.Schema({
        firstname: String,
        lastname: String
    })
)