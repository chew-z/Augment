// @flow
// @flow-NotIssue
/* globals chrome XMLHttpRequest */

chrome.webRequest.onBeforeRequest.addListener( function(details) {
    return { cancel: true}
    },
    {
        urls: url_patterns, 
        types: ["font", "image", "script", "sub_frame", "stylesheet", "xmlhttprequest"]
    },
    ["blocking"]
);
