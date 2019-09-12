$(document).ready(function(){
    // $("#petPlace").hide()

    $("#btn").on("click", function(){
        // $("#petPlace").show()

    var pf = new petfinder.Client({apiKey: "CQ4Lro9iMtqRrtgGFhehOTEdzq9qU6fVLx50myqbHKwnLAzPhf", secret: "F9xkBBNdKw1k6fw2ztLM0Zm7KNi0BXSXPN1fuP6d"});

    pf.animal.search()
    .then(function (response) {
        console.log(response.data.animals[0])
        let animal = response.data.animals[0]

        let petName = animal.name
        let petAge = animal.age
        let petBreed = animal.breeds.primary
        let description = animal.description
        let gender = animal.gender
        let dogImage = animal.photos[0].full

        $("#name").text(petName)
        $("#age").text("Age: " + petAge)
        $("#gender").append(gender)
        $("#breed").text(petBreed)
        $("#description").text(description)

        let newImage = $("<img>");
        newImage.attr("src", dogImage)
        newImage.addClass("imageSize")

        $("#dogImage").append(newImage);

    })
    .catch(function (error) {
        // Handle the error
    });

    
    })    

})