console.log("in Jobs");

(() => {
     chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, tab} = obj;
        console.log(type);
        console.log(tab);
     })
})();