const fetch = require('node-fetch');

const getGitHubApi = async (req, res) =>{
    const url= "https://api.github.com/search/users?q=" + req.query.q;

    return new Promise((resolve, reject) =>{
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                console.log('data:', data)
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