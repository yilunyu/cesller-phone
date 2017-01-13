// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import { greet } from './hello_world/hello_world'; // code authored by you in this project
import env from './env';

const main = remote.require('./background.js')
console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());
var button;
//var button = document.createElement('button')
//button.textContent = 'Open Window'
var SerialPort = require('serialport')

//document.body.appendChild(button);
// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
/*console.log('The author of this app is:', appDir.read('package.json', 'json').author);
*/

document.addEventListener('DOMContentLoaded', function () {
  //console.log('app.js');
  SerialPort.list(function(err, ports) {
    //console.log('app.js');
    //console.log(ports);

    var port = new SerialPort(ports[1].comName, {
      parser: SerialPort.parsers.readline('\n')
    });
    port.on('data', function (data) {
      console.log('Data: ' + data);
      port.write("received message")
     });
  })

  /*button = document.getElementById('button');
  console.log('button retrieved');
  button.addEventListener('click', () => {
    console.log('clicked')
    main.openWindow('pageTwo.html')
  }, false)*/
    //document.getElementById('greet').innerHTML = greet();
    //document.getElementById('platform-info').innerHTML = os.platform();
    //document.getElementById('env-name').innerHTML = env.name;
});
