var state = {play: false};

chrome.browserAction.onClicked.addListener(browserActionClicked);

function browserActionClicked() {
  // Update state.
  state.play = !state.play;
  updateIcon();
  
  // Send new state to spotify tab.
  spotifyTabs(function (tabs) {
    if (tabs.length > 0) {
      sendMessage(tabs[0], state);
    }
  });
}

function spotifyTabs(cb) {
  chrome.tabs.query({url: "https://play.spotify.com/*"}, cb);
}

function sendMessage(tab, message, cb) {
  chrome.tabs.sendMessage(tab.id, message, cb);
}

function updateIcon() {
  var path = state.play ? 'play.png' : 'pause.png';
  chrome.browserAction.setIcon({path: path}); 
}

