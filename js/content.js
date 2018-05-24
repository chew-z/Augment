// @flow
let GoogleLogoUrl = chrome.extension.getURL("img/googlelogo_1.png");
let smallGoogleLogoUrl = chrome.extension.getURL("img/googlelogo_2.png");
// document.get....  is HTMLCollection not an array. Array.from() ES6 only
var images = Array.from(document.getElementsByTagName('img')); 
// This only replaces side logo in search results with javascript enabled
images.forEach(function (image) {
    image.src = image.src.replace(/^.*googlelogo.*png$/, smallGoogleLogoUrl);
}
)
// Replace entire logo area - it looks cool
var logo_area = document.getElementById("lga")
if ( logo_area ) {
    logo_area.innerHTML = '<div title="Google Spies on You!" id="hplogo" onload="window.lol&&lol()"><img src="' + GoogleLogoUrl + '" align="middle" alt="Google Spies on You!"/></div>'
}
// Side logo in search results
var logo_cont = document.getElementById("logocont")
if ( logo_cont ) {
    logo_cont.innerHTML = '<h1><a href="https://www.google.com" id="logo" title="Go to Google Home"><img src="' + smallGoogleLogoUrl + '" width="95" height="37" align="middle" alt="Google Spies on You!"/> </a></h1>'
}

// Does it work at all? TODO 
var yt_consent = document.querySelector("paper-dialog")
if ( yt_consent ) {
    yt_consent.parentElement.removeChild(yt_consent);
}
// Block comments section on YouTube
// somehow it requires reload
// var yt_disc = document.getElementById('watch-discussion');
// if ( yt_disc ) {
//     yt_disc.style.display = 'none'
//     yt_disc.parentNode.removeChild(yt_disc);
//     yt_disc.remove();
// }
