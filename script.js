$(document).ready(function(){
  /* CHALLENGE #1:
      - when a user clicks on the happy button, make the background of the page yellow
      - when a user clicks on the sad button, make the background of the page blue */
  $("#happyButton").click(function(){
    $("body").css("background-color","#F8E71C");
  });

  $("#sadButtons").click(function(){
    $("body").css("background-color","#45B1E2");
  });
/* CHALLENGE #2:
    - when a user clicks on any of the circles, change the h1 text and the border of the image to the color of the circle*/
  // $("#green").click(function(){
  //   $("h1").css("color","$(#green).color"); //how to return the color of this element?
  // });
  // $("#blue").click(function(){
  //   $("h1").css("color","blue");
  // });
  // $("#red").click(function(){
  //   $("h1").css("color","red");
  // });
  $(".circle").click(function(){
    var color = $(this).css('background-color');
    console.log(this);
    console.log($(this));
    console.log(color);
    $("h1").css("color",color);
  });
/* CHALLENGE #3:
    - when a user hovers on the dog image, change it to an image of your dog.
    - when a user is no longer hovering, change it back to tonks   */
  $("#puppy").hover(function(){
    this.src ="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/19052099_421545151572023_8004605269101248512_n.jpg";
  }, function () {
      this.src ="https://scontent-ort2-2.cdninstagram.com/t51.2885-19/s320x320/13774700_319544435046731_1301136002_a.jpg";

/* CHALLENGE #4:
- when a user double clicks on CHANGE ME, change the text to "I changed"!*/
  $(".change").click(function(){
    alert("changed!");
    $(this).html( "I changed!" );
  });

  });





/* CHALLENGE #5:
    - when a user scrolls, add a new image of a dog of your choice to the bottom of the page.*/
});
