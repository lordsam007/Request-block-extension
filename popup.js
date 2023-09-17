document.addEventListener('DOMContentLoaded', function () {
    const blockButton = document.getElementById('block-button');
    const blockUrlInput = document.getElementById('block-url');
  
    blockButton.addEventListener('click', function () {
      const urlToBlock = blockUrlInput.value;
  
      if (urlToBlock) {
        blockUrl(urlToBlock);
      }
    });
  
    // Function to block a specific URL
    function blockUrl(url) {
      chrome.webRequest.onBeforeRequest.addListener(
        function (details) {
          return { cancel: true };
        },
        { urls: [url] },
        ['blocking']
      );
  
      alert(`URL ${url} is now blocked.`);
    }
  });
  