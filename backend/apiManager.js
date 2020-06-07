const fetch = require('node-fetch');

const getGitHubApi = async (req, res) =>{

    console.log("In Api");
    const url= "https://api.github.com/users?per_page=100";

    return new Promise((resolve, reject) =>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            resolve(res.status(200).send({data}));
        })
        .catch(err =>{
            console.log(err);
        })
        
    })
  
}

module.exports = {
    getGitHubApi
}