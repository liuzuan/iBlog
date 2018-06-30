import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    username: String,
    email: String
});

const model = mongoose.model('blog', blogSchema);

export default model;
