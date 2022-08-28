(() => {
    //  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    //     const { type, tab} = obj;
    //     console.log(type);
    //     console.log(tab);
    //     getJobData();
    //  });
    

     const getJobData = () => {
        const jobData = document.getElementsByClassName("job-view-layout jobs-details")[0].children[0].children[0]
        const jobInfo = jobData.children[0].children[0].children[0].children[0]
        const jobTitleHtml = jobInfo.children[0]
        const title = document.getElementsByClassName("t-24 t-bold jobs-unified-top-card__job-title")[0].childNodes
        const exp = title[0];
        const job = {
        }
        console.log(jobTitleHtml);
        console.log(title);
        console.log(exp);
     }
     
     getJobData()
})();