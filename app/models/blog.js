import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    username: String,
    email: String
});

const blog = mongoose.model('blog', blogSchema);

export {blog};
