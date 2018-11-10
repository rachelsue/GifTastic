//variables used
var topics = ["daria", "beavis and butthead", "cartoon sushi", "celebrity deathmatch", "wonder showzen", "liquid television" ];
var queryURL = "";
var userTopic = "";
var singleTopic = "";




   //function to create button 
  function renderButtons() {
    $("#topics-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        //a.addClass("topics");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#topics-view").append(button);
    };
    $("button").on("click", function() {
      var userTopic = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        userTopic + "&api_key=wznc2K79ch6XS7g23GX6MnhiNRw2hF37&limit=10";
        event.preventDefault();
        
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data;
  
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div1>");
  
            var rating = results[i].rating;
            
            var p = $("<p>").text("Rating: " + rating);
  
            var userTopic = $("<img>");
            //userTopic.attr("src", results[i].images.fixed_height.url);
            userTopic.attr("src", results[i].images.original_still.url);
            userTopic.attr("data-still", results[i].images.original_still.url)
            userTopic.attr("data-animate", results[i].images.original.url)
            userTopic.attr("data-state", "still");
            userTopic.addClass("img-responsive center-block gif")
  
            gifDiv.prepend(p);
            gifDiv.prepend(userTopic);
          
  
            $("#gif-pic").prepend(gifDiv);
            $("#rating").html(response);
          }
          $("img").on("click", function() {
            console.log("test"); 
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else if (state === "animate") {
                $(this).attr("src", $(this).attr("data-still"))
                $(this).attr("data-state", "still");
              }});
              
      })
    }) 
  }  
  
  renderButtons();
  
    
  

//function to
//function A(){
$("#add-topic").on("click", function(event){
    event.preventDefault();
    var singleTopic = $("#topic-typed").val();
    topics.push(singleTopic);
    renderButtons();


   // event.preventDefault();
    
   //var singleTopic = $("#topic-typed").val();
 

   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        singleTopic + "&api_key=wznc2K79ch6XS7g23GX6MnhiNRw2hF37&limit=10";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
    .then(function(response) {
    var results = response.data;


    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div1>");

      var rating = results[i].rating;
      

      var p = $("<p>").text("Rating: " + rating);

      var gifImage = $("<img>");
      //gifImage.attr("src", results[i].images.fixed_height.url);
      gifImage.attr("src", results[i].images.original_still.url);
      gifImage.attr("data-still", results[i].images.original_still.url)
      gifImage.attr("data-animate", results[i].images.original.url)
      gifImage.attr("data-state", "still");
      gifImage.addClass("img-responsive center-block gif")


      gifDiv.prepend(p);
      gifDiv.prepend(gifImage);

      $("#gif-pic").prepend(gifDiv);
      $("#rating").html(response);
    }

      $("img").on("click", function() {
        console.log("test"); 
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("data-state", "still");
          }});
  
})
})