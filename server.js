// Dependencies
var express = require("express");
var path = require("path");
​
// sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
//var PORT = 3000;
​
// Sets up the Express ap to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
const reservations = [];
const waitlist = [];

// Routes​
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
​
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});
​
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Route to api/tables
app.get("/api/tables", function(request, response) {
    return response.json(reservations);
})

// Route to api/waitlist
app.get("/api/waitlist", function(request, response) {
    return response.json(waitlist);
})
​
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});









