//pull elements from html
var nameEl = document.querySelector("#name");
var dogApi = "https://dog.ceo/api/breed/" + breed + "/images";
var infoApi = "https://randomuser.me/api/";
var breed = "affenpinscher";
//


//selector for breedlist

// name function pull
fetch(infoApi)
.then(function(response) {
    return response.json();
})
.then (function(data) {
    console.log(data.results[0].dob.age);

});


// insert dog photo function
fetch(dogApi)
.then(function(response) {
    return response.json();
})
.then (function(data) {
    console.log(data);
});

// insert dog info

// button event listener for likes and loves