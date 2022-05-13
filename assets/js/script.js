//pull elements from html
//var nameEl = document.querySelector(".name");
var photoEl = document.querySelector(".photo");
var contentEl = document.querySelector(".content-info");
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
    // var nameTitleEl = document.createElement("h2");
    // nameTitleEl.innerHTML = nameTitle;
    // nameEl.appendChild(nameTitleEl);
    
    var nameFirst = data.results[0].name.first;
    // var nameFirstEl = document.createElement("h2");
    // nameFirstEl.innerHTML = nameFirst;
    // nameEl.appendChild(nameFirstEl);

    var nameLast = data.results[0].name.last;
    // var nameLastEl = document.createElement("h2");
    // nameLastEl.innerHTML = nameLast;
    // nameEl.appendChild(nameLastEl);

    console.log(data.results[0].location.state);
    console.log(data.results[0].location.country);
    console.log("@"+data.results[0].login.username);
    console.log(data.results[0].dob.age+" Dog Years Old");
    //nameEl.appendChild(nameTitleEl + " " + nameFirstEl + " " + nameLastEl);
    document.getElementById("name").innerHTML("hello")
});

//


// insert dog photo function
fetch(dogApi)
    .then(function(response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data.message);
        var img = document.createElement("img");
        img.src = data.message;
        photoEl.appendChild(img); 
        //$(photoEl).append(img);
    })


// });



//like love counter

// button event listener for likes and loves