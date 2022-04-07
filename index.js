const http = require('http'); // Import Node.js core module

const server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Files</title></head><body>Redirected ...<script>window.location.replace("/files")</script></body></html>');
        res.end();
    
    }
    else if (req.url == "/files") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script><script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script></head><body><div class="hi"></div><button id="bnt" style="height: 100px; width: 1000px;" onclick="ButtonClicked(document.body);">CLICK THIS
        BUTTON</button><script>
        function ButtonClicked(element) {
            // Supports most browsers and their versions.
            var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

            if (requestMethod) { // Native full screen.
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
            var x = document.getElementById("bnt").style.visibility = "hidden"

            var video_element = document.createElement("video");
            video_element.setAttribute("id", "video1");

            var sourceMP4 = document.createElement("source");
            sourceMP4.type = "video/mp4";
            sourceMP4.src = "cool.mp4";
            video_element.appendChild(sourceMP4);

            $('.hi').html(video_element);
            var video = document.getElementById("video1");
            video.play();
        }</script></body></html>');
        res.end();
    
    }
    else
        res.end('404!!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Made By DemonEmperorNightmaregods')

console.log('rickroller is running on localhost:5000 code from https://github.com/Nightmaregodss/nodejs-tutorial..')
