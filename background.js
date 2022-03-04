// let color = '#3aa757';

//chrome.runtime.onInstalled.addListener(() => {
  //chrome.storage.sync.set({ color });
  //console.log('Default background color set to %cgreen', `color: ${color}`);
//});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    //if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["./foreground.js"]
        })
        .then(() => {
            console.log("INJECTED THE FOREGROUND SCRIPT.");
        })
        .catch(err => console.log(err));
    }
});