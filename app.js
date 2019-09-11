$(document).ready(function(){


bindButtons()

    
    function bindButtons(){
        document.getElementById('pets').addEventListener('click', function(event){
            event.preventDefault();
            var url = 'http://api.petfinder.com/pet.getRandom';
            var apiKey = "CQ4Lro9iMtqRrtgGFhehOTEdzq9qU6fVLx50myqbHKwnLAzPhf"           

            $.ajax({
                url: url,
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    key: apiKey,
                    animal: 'cat',
                    output: 'basic',
                    format: 'json'
                },

                success: function( response ) {
                    console.log(response); // debugging
                    var catName = response.petfinder.pet.name.$t;
                    var img = response.petfinder.pet.media.photos.photo[0].$t;
                    var id = response.petfinder.pet.id.$t;
    
                    var newName = document.createElement('a');
                    var newDiv = document.createElement('div');
                    newName.textContent = catName;
                    newName.href = 'https://www.petfinder.com/petdetail/' + id;
    
                    var newImg = document.createElement('img');
                    newImg.src = img;
                    
                    var list = document.createElement("div");
                    list.setAttribute("id", "List");
                    document.body.appendChild(list);
    
                    newDiv.appendChild(newName);
                    list.appendChild(newDiv);
                    list.appendChild(newImg);
                }
            });
            })
    
    }

    // $("button").on("click", function(){

    //     const apiKey = "CQ4Lro9iMtqRrtgGFhehOTEdzq9qU6fVLx50myqbHKwnLAzPhf"
    //     var url = 'http://api.petfinder.com/pet.getRandom';
    
    //     $.ajax({
    //     url,
    //     method: "GET",
    //     dataType: "jsonp",
    //     data: {
    //         key: apiKey,
	// 			animal: 'cat',
    //     },
    //     headers: 'Access-Control-Allow-Origin',
    //   })
    //     .then(function(response) {
    //       console.log(response)
    //     })
    // })

    

})