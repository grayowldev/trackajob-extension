

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log("this is a new tab with id "+ tabId)
    const url = tab.url
    console.log(url)

    chrome.tab.sendMessage(tabId, {
        type: "NEW",
        tab: tab,
    })

})