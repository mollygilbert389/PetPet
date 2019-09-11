$(document).ready(function(){

    $("button").on("click", function(){

    var pf = new petfinder.Client({apiKey: "APIT_KEY", secret: "SECRET"});

    pf.animal.search()
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        // Handle the error
    });
    })    

})