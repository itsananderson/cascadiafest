#!/usr/bin/env node

var opener = require("opener");
var url = "http://bit.ly/cascadiafest";

console.log("Opening " + url);
opener(url);
