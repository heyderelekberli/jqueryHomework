$(document).ready(function(){

    $(".animatedPart").click(function(){
        $(".movePart").slideToggle("slow");
      });
      $(".animatedPart1").click(function(){
        $(".movePart1").slideToggle("slow");
      });
      $(".animatedPart3").click(function(){
        $(".movePart3").slideToggle("slow");
      });
  
  $(".btn1").click(function(){
      $(".content1").css({
          "color":"navy",
          "font-size":"30px",
          "background-image":"url('img/redhead.jpg')",
          "background-size":"100% 100%"
       } )
  })
  $(".btn2").click(function(){
    $(".content2").css({
        "color":"red",

        "font-size":"25px",
        "background-color":"green",
     
      
     } )
})
$(".btn3").click(function(){
    $(".content3").css({
        "color":"white",
        "font-size":"25px",
        "background-color":"black",
     
      
     } )
})
  });