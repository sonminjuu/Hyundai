$(document).ready(function () {

  //css에서 먼저 안보이게 처리
  //m_but 클릭하면 보이게 만들어 주세요
  // $(".tab_right_in1").click(function(){
  //     $("#m_menu").css({
  //         display : "block",
  //     });

  // }); 

  var click = 0;

  $("#tab_click").click(function () {

    $("#menu_tap").animate({
      left: "5%",
    });

  });


  // x버튼을 클릭하면 menu_tap left: 100%만큼 가게해주세요
  $(".tap_x_icon>img").click(function () {
    $("#menu_tap").animate({
      left: "100%",
    });
  });


  // 모바일 메뉴 !
  $("#mobile_clicks").click(function () {
    $("#menu_mobile").animate({
      left: "0"
    });
  });

  $(".mobile_x_icon>img").click(function () {
    $("#menu_mobile").animate({
      left: "100%",
    });
  });




}); //end