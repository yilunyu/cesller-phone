import os from 'os'; // native node.js module
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
//import { greet } from './hello_world/hello_world'; // code authored by you in this project
import env from './env';

const main = remote.require('./background.js')
console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());
var button;

$(document).ready(function(event){
  $("input").on( "change", function() {
    $(this).attr('placeholder') = $(this).val();
  });
  //$("button").on("click", function(){
  //  $(this).value =
  //})
})
