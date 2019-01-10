var express = require("express");
var expressWs = require("express-ws");

var expressWs = expressWs(express());
var app = expressWs.app;

app.ws("/a", function(ws, req) {});
var aWss = expressWs.getWss("/a");

app.ws("/b", function(ws, req) {});

app.ws("/", function(ws, req) {
  ws.on("message", function(msg) {
    console.log(msg);
  });
  console.log("socket", req.testing);
});

// setInterval(function() {
//   aWss.clients.forEach(function(client) {
//     client.send("hello");
//   });
// }, 5000);

app.listen(3000);
