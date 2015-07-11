#!/usr/bin/env node

var opener = require("opener");
var url = "http://cascadiajs.com/";

console.log("Opening " + url);
opener(url);
