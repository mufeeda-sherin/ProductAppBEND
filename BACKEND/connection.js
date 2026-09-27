const mongoose = require('mongoose');

mongoose.connect("mongodb://mufeeachikulath1234_db_user:mufeeda@ac-hxhbdg8-shard-00-00.36h0m7m.mongodb.net:27017,ac-hxhbdg8-shard-00-01.36h0m7m.mongodb.net:27017,ac-hxhbdg8-shard-00-02.36h0m7m.mongodb.net:27017/?ssl=true&replicaSet=atlas-yqiw77-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{
     console.log("db connected")
})
.catch((err)=>{
    console.log  (err)
})