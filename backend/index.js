const express = require("express");
const moment = require("moment/moment");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const schema = require("./schema");
// Create an Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "*",
  })
);
const User = schema.User;
const BlogPost = schema.BlogPost;
const Team= schema.Team;

var db = mongoose.connection;

const blogPostData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NHTw_hCdWstE_o8hvQsHGK9zGuUnFYALRA&usqp=CAU",
    title: "AirPlane Definition",
    asperts:
      "airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, ",
  },
  {
    image:
      "https://cdn.britannica.com/41/123141-050-E6229449/Air-New-Zealand-Boeing-747-400.jpg?w=400&h=300&c=crop",
    title: "First Blog Post",
    asperts:
      "airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, ",
    content:
      "airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, and supported by the dynamic reaction of the air against its wings. For an account of the development of the airplane and the advent of civil aviation see history of flight.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NHTw_hCdWstE_o8hvQsHGK9zGuUnFYALRA&usqp=CAU",
    title: "First Blog Post",
    asperts:
      "airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, ",
    content:
      "airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, and supported by the dynamic reaction of the air against its wings. For an account of the development of the airplane and the advent of civil aviation see history of flight.",
  },
];



// Define a route to fetch blog posts
app.get("/api/blogposts", async (req, res) => {
  try {
    // Fetch all blog posts from MongoDB
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
    // console.log("Done");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/blogposts/:id", async (req, res) => {
  try {
    console.log("Done Blog");
    const blog = await BlogPost.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const seedData = async () => {
  try {
    await BlogPost.insertMany(blogPostData);
    console.log("Sample blog post data inserted successfully.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting sample blog post data:", error);
  }
};

app.post("/signup", async (req, res) => {
  // const User = mongoose.model("User");
  // console.log(req.body);
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    // The user exists
    // console.log("userExist");
    res.send("userExists");
  } else {
    const newuser = new User(req.body);
    await newuser
      .save()
      .then(() => {
        // console.log("success");
        res.send("sucess");
      })
      .catch((err) => {
        console.log(err);
        res.status(102).send(new Error(err));
      });
    // The user does not exist
  }
});



app.post("/teamFormDetails", async(req,res)=>{
  // const users=team.
  // fetching whole schema team from Mongodb
  try {
    const teams = await Team.find();
    res.send(teams);
  } catch (error) {
    console.error("Error fetching Team details:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login", async (req, res) => {
  try {
    // const User = mongoose.model("User");
    // console.log(req.body);
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      // The user exists
      if (user.password == req.body.password) {
        // console.log("userExist");
        
        res.send({ cat: "sucess", name: user.name, email: user.email });
      } else {
        res.send({cat:"invalidpass"});
      }
    } else {
      // The user does not exist
      // console.log("user not exist");
      res.send({cat:"notexist"});
    }
  } catch (err) {
    console.log(err);
    res.status(102).send(new Error(err));
  }
});

app.post("/registerteam", async(req,res)=>{
  try{
    const team=new Team(req.body);
    // console.log(req.body);
    // console.log(team);
    await team.save()
    .then(() => {
      res.send("sucess");
    })
    .catch((err) => {
      console.log(err);
      res.status(102).send(new Error(err));
    });
    

  }catch(err){
    console.log(err);
    res.status(102).send(new Error(err));
  }
});

// Start the server
const port = 3000;
app.listen(port, async() => {
  // console.log(`Server started on port ${port}`);
  // Connect to MongoDB
  // mongoose.connect('mongodb+srv://aeromodelling:aeromodelling1234@cluster0.ozskajy.mongodb.net/', {
  await mongoose
    .connect(
      "mongodb+srv://aeromodellingnitkkrdatabase:b4NAfRGGziJSdCM7@auth.4juroxh.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ).then(() => {
      console.log("Mongoogse Connected")
      
    })
    .then(() => {
      console.log("Server Connected");
      // seedData();
    })
    .catch((e) => {
      // console.log(e);
    });
});
