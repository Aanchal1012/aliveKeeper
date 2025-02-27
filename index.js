const axios = require('axios');



setInterval(async ()=>{
    // const resp = await axios.get('https://project-stories.onrender.com/keep-alive');
    // console.log(`Got keep-alive for stories! - `,(resp.data))
    const resp2 = await axios.get('https://vanaj-backend-dev.onrender.com/');
    console.log(`Got keep-alive for vanaj! - `,(resp2.data))
}, 14)