$("button").click(function() {
  $(".burger").toggleClass("focus");
  $(".content").toggleClass("show")
});

$("nav").click(function(){
  $(".content").toggleClass('show');
  $(".burger").toggleClass("focus");
});

document.querySelector("html").classList.add("js");
