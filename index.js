var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var MongoClient = require('mongodb').MongoClient;
await client.connect();
await listDatabases(client);


try {
    await client.connect();

    await listDatabases(client);
 
} catch (e) {
    console.error(e);
}

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

const url = "mongodb+srv://aeromodelling-signup:Shivam@114@cluster0.skf6mst.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("corporation");
  var myobj = { name: "Company Inc", address: "Highway 37, USA" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});



// var db = mongoose.connection;

// db.on('error',()=>console.log("Error in Connecting to Database"));
// db.once('open',()=>console.log("Connected to Database"))

// app.post("/sign_up",(req,res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var phno = req.body.phno;
//     var password = req.body.password;

//     var data = {
//         "name": name,
//         "email" : email,
//         "phno": phno,
//         "password" : password
//     }

//     db.collection('users').insertOne(data,(err,collection)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully");
//     });

//     return res.redirect('signup_success.html')

// })


// app.get("/",(req,res)=>{
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     })
//     return res.redirect('index.html');
// }).listen(3000);


// console.log("Listening on PORT 3000");
