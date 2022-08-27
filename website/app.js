/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Base URL for openweather map api
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API KEY For OpenWeatherMap API
// units=imperial was required in rubric requirements.
const apiKey = '&appid=ad06890cf5eb93182c0841f9786f6428&units=imperial';



// Function To Get Web API data
const getWeather = async (baseURL, zipCode, apiKey) => { 
    try {
        const apiResponse = await fetch (baseURL+zipCode+apiKey);
    // convert data into JSON
    const data = await apiResponse.json();
    return data;
    }
    catch(error) {
        console.log("Weather Data Error #44:", error);
      // appropriately handle the error
    }
  };
  



// Function To Post data
const postData = async ( url = '', info = {})=> {
    const response = await fetch (url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(info), // body data type must match "Content-Type" header        
  });
    try {
        //calls the funtion to GET projectData
        retrieveData();

    }catch(error) {
        console.log("postData Error #65 :", error);
        // appropriately handle the error
    };
};





// Event Listener to Generate Button on App Webpage 
document.getElementById('generate').addEventListener('click', () => {
    const zipCode = document.getElementById('zip').value;
    const userContent = document.getElementById('feelings').value;
    getWeather(baseURL, zipCode, apiKey).then(function(info){postData('http://localhost:8000/clientData', {date:newDate, temp:info.main.temp, content:userContent})
    })
});



//function to GET projectdata
const retrieveData = async () =>{
    const request = await fetch('http://localhost:8000/allData');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements

    document.getElementById("date").innerHTML ="Date : " + allData.date;
    document.getElementById('temp').innerHTML = "Temperature : " + Math.round(allData.temp)+ ' Celsius';
    document.getElementById('content').innerHTML = 'Your feeling today is : ' + allData.content;

    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   }