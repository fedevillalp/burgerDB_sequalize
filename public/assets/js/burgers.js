$(function() {

    $("#addburger").on("submit", function(event) {
        event.preventDefault();
        
        var consumed = $("#consumed").is(":checked");
        if (consumed) { consumed = 1} else {consumed = 0};
        console.log(consumed);
        // Make sure to preventDefault on a submit event.
  
        var new_burger = {
          burger_name: $("#addburger [name=burger]").val().trim(),
          consumed: 0
        };
  
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: new_burger
        }).then(
          function() {
            console.log("Added new burger");
            location.reload();
          }
        );
    });
  
    $(".btn.btn-outline-primary").on("click", function(event) {
        event.preventDefault();
        
        var id = $(this).data("id");
        console.log("PUT ID: ");
        console.log(id);
        var burger_status = {
          status: true
        };
  
        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burger_status
          }).then(
            function() {
              console.log("Ate burger!");
              location.reload();
            }
          );
    });

    $(".btn.btn-outline-danger.btn-sm").on("click", function(event) {
      event.preventDefault();
      
      var id = $(this).data("id");
      console.log("Delete ID: ");
      
      // Send the POST request.
      $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("Digested burger!");
            location.reload();
          }
        );
    });
  
});