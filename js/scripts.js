$(document).ready(function() {
  $("#showImg").click(function() {
    $(".walrus-showing").fadeIn();
    $(".walrus-hidden").toggle();
  });
  $("#hideImg").click(function() {
    $(".walrus-showing").fadeOut();
    $(".walrus-hidden").toggle();
  });
  $("#showText").click(function() {
    $("#expandingText").slideDown();
    $("#showText").hide();
  });
});
