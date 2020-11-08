"use strict"

let imageFileName = randomFileName(0, 36);
let imageURL = "url('../img/bg/" + imageFileName + ".jpg')";
document.getElementById("body").style.backgroundImage = imageURL;


function randomFileName(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}