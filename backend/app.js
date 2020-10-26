const express = require('express');
const apiManager = require('./apiManager');
const bodyParser = require('body-parser');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

//routes
app.get('/users', apiManager.getGitHubApi);

app.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
