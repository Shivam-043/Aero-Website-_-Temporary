const { MongoUnexpectedServerResponseError } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Define a BlogPost schema
const blogPostSchema = new mongoose.Schema({
    image: String,
    title: String,
    asperts: String,
    content: String,
  });
  
  // Define a BlogPost model
  const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports= {User,BlogPost};