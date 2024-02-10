// index.js
const express = require("express");
const moment = require("moment/moment");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { User, BlogPost, Team, Counter } = require("./schema");
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
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(409).send({ error: true, message: "User already exist" });
    } else {
      // Get the current counter value and increment it
      const counter = await Counter.findOneAndUpdate(
        { _id: "userIdCounter" },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
      );

      // Create a new user without explicitly setting _id
      const newUser = new User({
        ...req.body,
      });

      // Set the _id field after saving the user
      newUser.userId = counter.sequence_value;

      // Save the user again with the correct _id value
      await newUser.save();

      res.status(201).send({error:false,message:"User created successfully"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({error:true,message:"Internal Server Error"});
  }
});



app.post("/teamFormDetails", async (req, res) => {
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
    const user1 = await User.findOne({ email: req.body.email });
    const user = user1;

    if (user) {
      // The user exist
      if (user.password == req.body.password) {
        
          res.send({error:false, message: "User data served", name: user.name, email: user.email ,role: user.role ,userId: user.userId});
      } else {
        res.send({error:true, message: "invalidpass" });
      }
    } else {
      // The user does not exist
      // console.log("user not exist");
      res.send({ error:true,message: "notexist" });
    }
  } catch (err) {
    console.log("Error in login : ", err);
    return res.status(422).json({ error: true, message: "Internal server error" ,err});
    
  }
});

app.post("/registerteam", async (req, res) => {
  try {
    const team = await Team.findOne({ name: req.body.name });

    if (team) {
      res.status(409).send("Team name already exists");
    } else {
      const counter = await Counter.findOneAndUpdate(
        { _id: "teamIdCounter" },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
      );
      const newTeam = new Team({...req.body});
      newTeam.teamId= counter.sequence_value;
      // console.log(req.body);
      // console.log(team);
      await newTeam.save()
        .then(() => {
          res.send("sucess");
        })
        .catch((err) => {
          console.log("Error creating team in database",err);
          res.status(102).send(new Error(err));
        });
    }

  } catch (err) {
    console.log("Error in  registering a new team ", err);
    res.status(102).send(new Error(err));
  }
});

const getAllTeams = async (req, res) => {
  try {
    // Use the `find` method to get all teams from the database
    const teams = await Team.find();

    // Check if there are any teams
    if (teams.length === 0) {
      return res.status(404).json({ message: "No teams found." });
    }

    // Send the list of teams as a JSON response
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
app.get("/getallteams", getAllTeams);
// Start the server
const port = 3000;
app.listen(port, async () => {
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
      console.log("Error connecting to Mongo DB ", e);
    });
});
