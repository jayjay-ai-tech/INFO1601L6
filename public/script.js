/*

//get client data using navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent)
console.log(navigator.platform);

//get window metadata using window
console.log(window.location.href);//get full url
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);//redirects the page to another url
}

window.onload = function(event){
   console.log("Page has loaded");
   //do other javascript stuff here
}

//Global variables declared with var are automatically added to the window object
var bob = 'bob';
const sally = 'sally';
    
console.log(window.bob === bob);//true
console.log(window.sally === sally);//false

var document = 'hello this is my variable';
console.log(document);//give the DOM object instead 
console.log(window.document === document)//true because declaration ignored

*/