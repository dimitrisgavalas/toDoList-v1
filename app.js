
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date);

const port = 3000;
const app = express();

let items = ["deez nuts"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {



  //res.render() function is used to render a view and sends the
  // rendered HTML string to the client.
  //"list" = logika arxeio  pou 8a emfanistei ws html to kindOfDay
  res.render("list" , {
    listTitle: day,
    newListItems : items
  });

});

app.post("/", function(req, res){

  let item = req.body.newItem;

  if (req.body.list ===  "Work List") {
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/");
  }

  // res.redirect("/");
  console.log(req.body.newItem);
  console.log("Post request received.");
});


app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req,  res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})




app.get("/about", function(req, res){
  res.render("about");
});

app.listen(port, function() {
  console.log("Server started on port 3000");
});





























  // var currentDay = today.getDay();
  // var day = "";
  //
  //
  // switch (currentDay) {
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   default:
  //   console.log("Error. Current day is equal to " + currentDay);
  // }

  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend";
  // } else {
  //   day = "weekday";
  // }

  //res.send("Hello")
