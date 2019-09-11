$(document).ready(function(){

    $("#btn").on("click", function(){

    var pf = new petfinder.Client({apiKey: "CQ4Lro9iMtqRrtgGFhehOTEdzq9qU6fVLx50myqbHKwnLAzPhf", secret: "F9xkBBNdKw1k6fw2ztLM0Zm7KNi0BXSXPN1fuP6d"});

    pf.animal.search()
    .then(function (response) {
        console.log(response.data.animals[0])
        let animal = response.data.animals[0]

        let petName = animal.name
        let petAge = animal.age
        let petBreed = animal.breeds
        // let description = animal.description
        // let gender = animal.environement.gender
        // let image = animal.photos[0]

        let newHOne = $("<h1>")
        let newP = $("<p>")
        newP.append(petAge)
        newHOne.append(petName)
        $("#petGoesHere").append(newHOne)
        $("#petGoesHere").append("Age:" + newP)


    })
    .catch(function (error) {
        // Handle the error
    });

    
    })    

})