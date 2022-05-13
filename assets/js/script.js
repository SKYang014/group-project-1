//pull elements from html
var nameEl = document.querySelector("#name");
var divEl = document.querySelector("#info");
var dogApi = "https://dog.ceo/api/breeds/image/random";
var infoApi = "https://randomuser.me/api/";

//


//selector for breedlist

// pull from data from API
fetch(infoApi)
.then(function(response) {
    return response.json();
})
.then (function(data) {
    console.log(data.results[0].location.state);
    console.log(data.results[0].location.country);
    console.log("@"+data.results[0].login.username);
    console.log(data.results[0].dob.age+" Dog Years Old");

});

//


// insert dog photo function
fetch(dogApi)
.then(function(response) {
    return response.json();
})
.then (function(data) {
    console.log(data);
    var photoUrl = []
    var photoEl = document.createElement("img.src = " + data.message + ";");
    
});



//like love counter

// button event listener for likes and loves