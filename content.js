chrome.runtime.onMessage.addListener(messageRecv);

function messageRecv(request) {

    // needs to be an array or it complains


/*
  window.postMessage({
    type: 'from-content-script',
    text: JSON.stringify(request)}, '*');
*/


    var arr = [{type:'from-content-script'}];
    
    window.postMessage(arr,'*');
}

var s = document.createElement("script");
s.src = chrome.extension.getURL("inject.js");
s.onload = function() {
  this.parentNode.removeChild(this);
};
document.body.appendChild(s);
