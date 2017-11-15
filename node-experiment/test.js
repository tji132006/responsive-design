/*
* @Author: Tong Ji
* @Date:   2017-11-14 16:17:37
* @Last Modified by:   Tong Ji
* @Last Modified time: 2017-11-14 16:40:33
*/
var files = require('fs');
var https = require('https');

files.writeFile(__dirname + "/index.html", "<h1>HTML rocks</h1>");
var dogUrl = "https://www.afdb.org/fileadmin/_processed_/csm_ADF-13-PBA_7ee82fd9ae.png"
var dogFile = files.createWriteStream(__dirname + "/node-dog.png");
var request = https.get(dogUrl, function(response){
    response.pipe(dogFile);
});