//showing elments if the javscipt is enabled
$('header').show();
$('map').show();
$('#top').show();

//moving to the targeted element smoothely in 2 s
$("#home").click(function() {
    $('html,body').animate({
      scrollTop:$("#second-footer").offset().top}, 2000);
    });
//moving to the targeted element smoothely in 2 s
$("#coaches").click(function() {
      $('html,body').animate({
        scrollTop:$(".couches").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$("#priser").click(function() {
      $('html,body').animate({
        scrollTop:$(".priser").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$("#kontakt").click(function() {
      $('html,body').animate({
        scrollTop:$(".container").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$(".readmore").click(function() {
      $('html,body').animate({
        scrollTop:$(".target").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$("#top").click(function() {
      $('html,body').animate({
        scrollTop:$("header").offset().top}, 2000);
      });

//checking the inputs if they are valid
function testInfo(input, re, textsvar){
  var OK = re.exec(input);
  if (!OK) {
    $(textsvar).text("fel");
  }  else{
    $(textsvar).text("rätt");
  }
}

//checking the input of the numbers
$('#number').keyup(function() {
  var re = /^[0]{1}[0-9]{6,15}$/;
  testInfo($('#number').val(), re, ".answerNumber");
});

//checking the input of the name "text"

$("#fname").keyup(function() {
        var re = /^[A-Za-z]+$/;
        testInfo($('#fname').val(), re, ".answerFname");
    });

$("#lname").keyup(function() {
        var re = /^[A-Za-z]+$/;
        testInfo($('#lname').val(), re, ".answerLname");
    });

$("#gmail").keyup(function() {
      var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
      testInfo($('#gmail').val(), re, ".answerGmail");
  });
