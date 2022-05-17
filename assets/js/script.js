//pull elements from html
var nameEl = document.querySelector(".name");
var photoEl = document.querySelector(".photo");
var contentEl = document.querySelector(".info-content");
var dogApi = "https://dog.ceo/api/breeds/image/random";
var infoApi = "https://randomuser.me/api/";
var likeCount = 0;
var loveCount = 0;

//
var likebtn = document.querySelector("#likebtn");
var likeCounter = document.querySelector(".likeCounter");
var lovebtn = document.querySelector("#lovebtn");
var loveCounter = document.querySelector(".loveCounter");

function interaction() {
    // lovebtn.addEventListener("click", function () {
    //     loveCount++;
    //     loveCounter.innerHTML = loveCount;
    // })
    // nameEl.innerHTML = "";
    // photoEl.innerHTML = "";
    // contentEl.innerHTML = "";
    $(".name").empty();
    $(".photo").empty();
    $(".content-list").empty();
    infoupdate();
    dogphoto();
}

//selector for breedlist
function infoupdate() {
    fetch(infoApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var nameFull = function () {
                //nameEl.appendChild(nameTitle);
                $(".name").append(nameTitle + " " + nameFirst + " " + nameLast);
            }

            var infoFull = function () {
                $(".content-list").append(infoLocationEl, infoUsernameEl, infoAgeEl)
            }

            var nameTitle = data.results[0].name.title;

            var nameFirst = data.results[0].name.first;

            var nameLast = data.results[0].name.last;

            var infoCountry = data.results[0].location.country;;
            var infoState = data.results[0].location.state;
            var infoLocationEl = document.createElement("li");
            infoLocationEl.innerHTML = infoState + ", " + infoCountry;

            var infoUsername = "@" + data.results[0].login.username;
            var infoUsernameEl = document.createElement("li");
            infoUsernameEl.innerHTML = infoUsername;

            var infoAge = data.results[0].dob.age + " Dog Years Old";
            var infoAgeEl = document.createElement("li");
            infoAgeEl.innerHTML = infoAge;

            nameFull();
            infoFull();
        })
        .catch(function (err) {
            console.log(err)
        })
}

//


// insert dog photo function
function dogphoto() {
    fetch(dogApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.message);
            var img = document.createElement("img");
            img.src = data.message;
            photoEl.appendChild(img);
            //$(photoEl).append(img);
        })
        .catch(function(err){
            console.log(err)
        })
}


// });

$("#likebtn").on("click", function() {
    interaction();
    likeCount++;
    likeCounter.innerHTML = likeCount;
});


$("#lovebtn").on("click", function() {
    interaction();
    loveCount++;
    loveCounter.innerHTML = loveCount;
});

infoupdate()
dogphoto()
// {
    // likeCount++;
    // likeCounter.innerHTML = likeCount;
//});

//like love counter

// button event listener for likes and loves