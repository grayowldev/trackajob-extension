// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//     console.log("this is a new tab with id "+ tabId)
//     const url = tab.url
//     console.log(url)

//     chrome.tab.sendMessage(tabId, {
//         type: "NEW",
//     })

// })

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  });

  chrome.runtime.onMessage.addListener((msg, sender, response) => {
        console.log(sender.tab ? sender.tab.url :
            "not a tab")
        if (msg.req === "addJob" && msg.payload != {}) {
            const endpoint = "http://localhost:7000/job/" 
            console.log(endpoint);

            fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(msg.payload)
                }).then((res) => {
                if (res.status !== 200) {
                    response({
                        message: "Error",
                    })
                }
                res.json().then( (data) => {
                    response({
                        message: "Success",
                        payload: data});
                }).catch((err) => {
                    response({message: "Error"})
                })
            });
            
        }
        return true
    }
  );