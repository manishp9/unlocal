$(document).ready(function () {
  new WOW().init();
});

$(".nav-toggle button").click(function (e) {
  e.preventDefault();
  $("body").addClass("active");
  $(".nav-items").addClass("!right-0");
});
$(".nav-toggle-close").click(function (e) {
  e.preventDefault();
  $("body").removeClass("active");
  $(".nav-items").removeClass("!right-0");
});
$(".nav-link").click(function () {
  $(".nav-link").removeClass("font-2 text-white");
  $(".nav-link").addClass("text-[#9CD4C2]");
  $(this).addClass("font-2 text-white");
  $("body").removeClass("active");
  $(".nav-items").removeClass("!right-0");
});
$(document).ready(function () {
  var isUserScrolling = false; // Flag to track user-initiated scrolling

  // Listen for mouse scroll (wheel event), keyboard scroll (keydown event), and touch scroll events
  $(window).on("wheel keydown touchstart touchmove", function () {
    isUserScrolling = true;

    // Reset the flag after some time (to stop detecting after scrolling ends)
    setTimeout(function () {
      isUserScrolling = false;
    }, 1000); // Adjust timeout as needed
  });

  // Handle scroll event to detect section in view
  $(window).on("scroll", function () {
    if (isUserScrolling) {
      var scrollPosition = $(window).scrollTop();

      // Loop through each section
      $("section").each(function () {
        var sectionTop = $(this).offset().top - 325; // Adjust offset for more accurate activation
        var sectionBottom = sectionTop + $(this).outerHeight();
        var sectionId = $(this).attr("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Remove 'active' class from all nav links
         $(".nav-link").removeClass("font-2 text-white");
         $(".nav-link").addClass("text-[#9CD4C2]");

          // Add 'active' class to the link corresponding to the section in view
          $('.nav-link[href="#' + sectionId + '"]').addClass("font-2 text-white");
        }
      });
    }
  });
});


$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    // You can adjust the scroll position threshold
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});

$("#currentYear").text(new Date().getFullYear());
