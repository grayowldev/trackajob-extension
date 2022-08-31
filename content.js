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
        const company = document.getElementsByClassName("jobs-unified-top-card__company-name")[0].innerText
        const location = document.getElementsByClassName("jobs-unified-top-card__bullet")[0].innerText
        const workplaceType = document.getElementsByClassName("jobs-unified-top-card__workplace-type")[0] ? document.getElementsByClassName("jobs-unified-top-card__workplace-type")[0].innerText : "Ask"
        const link = ""
        const jobOrigin = ""
        const jobId = ""
        const companyImage = document.getElementsByClassName("ember-view link-without-hover-state inline-block")[0].innerHTML

        const exp = title[0];
        const job = {}
        console.log(jobInfo);

        console.log(company)
        console.log(location)
        console.log(workplaceType)
        console.log(companyImage)
        console.log(jobTitleHtml);
        console.log(title);
        // console.log(job);
        console.log(exp)
        job["title"] = exp
        job["company"] = company
        job["location"] = location
        job["workplaceType"] = workplaceType
        job["companyImage"] = cleanImageUrl(companyImage)
        return job
     }

     const cleanImageUrl = (url) =>{
        url = url.split('src="')[1].split('"')[0].replaceAll("&amp;","&")
        console.log(url);
        return url
     }
     
     const job = getJobData()
     job.title = job.title.textContent
     console.log(job);

     chrome.runtime.sendMessage({
        req: "addJob",
        payload: job,
    }, (response) => {
        console.log(response.message)
        if ( response.message == "Success"){
            console.log(response.payload);
        }
     })
})();