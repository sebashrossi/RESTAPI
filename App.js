const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/<DATABASE>", {useNewUrlParser: true, useUnifiedTopology: true});

const <NAME>Schema = {
    title: String,
    content: String
}

const <NAME> = mongoose.model("<NAME>", <NAME>Schema);

app.route("/<NAME>")

.get(function (req, res){
    <MODEL NAME>.find(function(err, <FOUND ITEMS>){
        if(err){
            console.log(err);    
        } else {
            res.send(<FOUND ITEMS>);
        }
    });
})

.post(function (req, res){
const <NAME> = new <MODEL NAME> ({
    title: req.body.title,
    content: req.body.content
});
<ITEM>.save(function(err){
    if(!err){
        res.send("<MESSAGE>")
    } else {
        res.send(err);
    }    
});
})

.delete(function(req, res){
    <MODEL NAME>.deleteMany(function(err){
        if(!err){
            res.send(<MESSAGE>)
        } else {
            res.send(err);
        }
    });
});


app.route("/<route>/:<route2>")

.get(function(req, res){
    <MODEL NAME>.findOne({title: req.params.<route2>}, (err, <FOUND ITEMS>) => {
        if(<FOUND ITEMS>){
            res.send(<FOUND ITEMS>);
        } else {
            res.send("<MESSAGE>");
        }
    });
})
.put((req, res) => {
    <MODEL NAME>.update(
        {title: req.params.<route2>}, 
        {title: req.body.title, content: req.body.content}, {overwrite: true}, function (err) {
            if(!err) {
                res.send("Updated <MESSAGE>");
            }
        } 
    );
})
.patch((req, res) => {
    <MODEL NAME>.update(
        {title: req.params.<route2>},
        {$set: req.body},
        (err) => {
            if(!err) {
                res.send("<MESSAGE>");
            }
        }

    );
})
.delete((req, res) => {
    <MODEL NAME>.deleteOne(
        {title: req.params.<route2>},
        (err) => {
            if(!err){
                res.send("<MESSAGE>")
            }
        }
    );
});















app.listen(3000, function(){
var currentDate = new Date();
var dateTime = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
console.log('Server running at ' + dateTime);
});