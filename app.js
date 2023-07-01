//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render("list", { listTitle: day, newListItem: items});//This is just a JS object (JSON)
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItem: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    //console.log(req.body.list);

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } 
    else{
        items.push(item);
        res.redirect("/");
    }   
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000");
});