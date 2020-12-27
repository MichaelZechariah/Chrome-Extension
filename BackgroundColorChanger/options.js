let page = document.getElementById('Changerbutton');

    let button = document.createElement('button');
    button.style.backgroundColor = '#ffffff';
    button.className="jscolor"
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: button.style.backgroundColor}, function() {
        console.log('color is ' + button.style.backgroundColor);
      })
    });
    page.appendChild(button);
 