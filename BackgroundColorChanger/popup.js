let BackgroundColorChanger = document.getElementById('BackgroundColorChanger');
chrome.storage.sync.get('color', function(data) {
  BackgroundColorChanger.style.backgroundColor = data.color;
  BackgroundColorChanger.setAttribute('value', data.color);
});

BackgroundColorChanger.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
