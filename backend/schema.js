// schema.js
const { MongoUnexpectedServerResponseError } = require("mongodb");
const mongoose = require("mongoose");
const User = require("./models/user.models");
const Counter = require("./models/counter.models");


// Define a BlogPost schema
const BlogPostSchema = new mongoose.Schema({
  image: String,
  title: String,
  asperts: String,
  content: String,
});

// Define a BlogPost model
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

const teamSchema = new mongoose.Schema({
  team_name: String,
  team_leader_name: String,
  team_mob: String,
  team_email: String,
  team_size: Number,
  team_about: String,
  team_member: Array,
});

const Team = mongoose.model("Team", teamSchema);

module.exports = { User, BlogPost, Team, Counter };
