//MENU ANIMATIONS

$(document).ready(function() {
  $(".hamburger").click(e => {
    $(".main-heading").animate({ opacity: "0" });
    $(e.currentTarget).animate({ opacity: "0" });
    $("section").animate({
      left: "2%",
      height: "95%"
    });
    $(".menu").animate({ width: "95%", opacity: 1 });

    setTimeout(() => {
      $(".cancel-icon").animate({ opacity: 1 });
      $(".box").animate({ opacity: 1 });
    }, 800);
  });

  $(".cancel-icon").click(() => {
    close_menu();
  });

  //SECTION OPENINGS

  $(".box").click(e => {
    $("section").animate({ opacity: "0", width: "0%" });
    let ele = $(e.currentTarget).attr("id");
    setTimeout(() => {
      switch (ele) {
        case "1":
          close_menu();
          $(".home").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });
          break;
        case "2":
          close_menu();
          $(".e_about").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });
          break;
        case "3":
          close_menu();
          $(".e_gallery").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });
          break;
        case "4":
          close_menu();
          $(".e_services").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });
          break;
        case "5":
          close_menu();
          $(".e_contact").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });
          break;
        case "6":
          close_menu();
          $(".e_contact").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });
      }
    }, 400);
  });
});

//IMPORTANT FUNCTIONS

function close_menu() {
  $(".main-heading").animate({ opacity: "1" });
  $(".hamburger").animate({ opacity: "1" });
  $(".box").animate({ opacity: 0 });
  $("section").animate({ left: "0%", height: "100%" });
  $(".cancel-icon").animate({ opacity: 0 });

  setTimeout(() => {
    $(".menu").animate({ width: "0%", opacity: 0 });
  }, 600);
}
