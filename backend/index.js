const express = require('express');
const moment = require('moment/moment');
const mongoose = require('mongoose');

// Create an Express app
const app = express();

// Define a BlogPost schema
const blogPostSchema = new mongoose.Schema({
  image: String,
  title: String,
  asperts: String,
  content: String,
});

// Define a BlogPost model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
const blogPostData = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NHTw_hCdWstE_o8hvQsHGK9zGuUnFYALRA&usqp=CAU',
    title: 'AirPlane Definition',
    asperts: 'airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, '
  },
  {
    image: 'https://cdn.britannica.com/41/123141-050-E6229449/Air-New-Zealand-Boeing-747-400.jpg?w=400&h=300&c=crop',
    title: 'First Blog Post',
    asperts: 'airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, ',
    content: 'airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, and supported by the dynamic reaction of the air against its wings. For an account of the development of the airplane and the advent of civil aviation see history of flight.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NHTw_hCdWstE_o8hvQsHGK9zGuUnFYALRA&usqp=CAU',
    title: 'First Blog Post',
    asperts: 'airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, ',
    content: 'airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, and supported by the dynamic reaction of the air against its wings. For an account of the development of the airplane and the advent of civil aviation see history of flight.',
  },
];


const seedData = async () => {
  try {
    await BlogPost.insertMany(blogPostData);
    console.log('Sample blog post data inserted successfully.');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting sample blog post data:', error);
  }
};


// Define a route to fetch blog posts
app.get('/api/blogposts', async (req, res) => {
  try {
    // Fetch all blog posts from MongoDB
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
    console.log("Done");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/blogposts/:id' , async (req, res) => {
  try{
    console.log("Done Blog");
    const blog = await BlogPost.findById(req.params.id);
    res.json(blog);
  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  // Connect to MongoDB
mongoose.connect('mongodb+srv://aeromodelling:aeromodelling1234@cluster0.ozskajy.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Server Connected");
// seedData();
}).catch((e) => {console.log(e)});
});
