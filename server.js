// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Cors for cross origin allowance
const cors = require('cors');

//Enable Cors Requests
app.use(cors());

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server.
const port = 8000; 

//Spin up the server 
const server = app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
})

// Setup empty JS object to act as endpoint for all routes
  projectData = {};


  
// GET route  that returns the projectData
app.get('/allData', (request, response)=>{
    //console.log("GET ROUTE : ")
    console.log(projectData);
    response.send(projectData);
});

// POST route that adds incoming data to projectData
app.post('/clientData' ,(request, response)=>{
  projectData = request.body
  //console.log("POST ROUTE : ")
  console.log(projectData);
  response.send(projectData);
});
