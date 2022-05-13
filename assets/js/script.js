//pull elements from html
var nameEl = document.querySelector("#name");
var divEl = document.querySelector("#info");
var contentEl = document.querySelector("#content-info");
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
    
    var nameTitle = data.results[0].name.title;
    console.log(nameTitle);
    var nameTitleEl = document.createElement("h2");
    nameTitleEl.innerHTML = nameTitle;
    //nameTitleEl.appendChild(nameTitle);
    
    // console.log(data.results[0].name.first);
    // var nameFirst = data.results[0].name.first;
    // var nameFirstEl = document.createElement("li");
    // nameFirstEl.appendChild(nameFirst);

    // console.log(data.results[0].name.last);
    // var nameLast = data.results[0].name.last;
    // var nameLastEl = document.createElement("li");
    // nameLastEl.appendChild(nameLast);

    console.log(data.results[0].location.state);
    console.log(data.results[0].location.country);
    console.log("@"+data.results[0].login.username);
    console.log(data.results[0].dob.age+" Dog Years Old");
    nameEl.appendChild(nameTitleEl);
});

//


// insert dog photo function
// fetch(dogApi)
// .then(function(response) {
//     return response.json();
// })
// .then (function(data) {
//     console.log(data);
//     var photoUrl = []
//     var photoEl = document.createElement("img.src = " + data.message + ";");
    
// });



//like love counter

// button event listener for likes and loves