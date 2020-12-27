chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#ffffff'}, function() {
    console.log('The color is white.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: '.'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
