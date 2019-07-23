$("document").ready(() => {
    set_rot_size();
    $(window).on("resize", set_rot_size);
    $("#nav-home").click(() => {
        $("#body").load("./home.html");
    });
    set_rot_size();
  })

  function set_rot_size() {
    //console.log("Hello from page load");
    var p_width = $(window).width();
    //console.log("Page W:" + p_width);
    var p_height = $(window).height();
    //console.log("Page H:" + p_height);
    var rot_dia = p_width * .25;
    var rot_margin_left = (p_width - rot_dia)/2;
    var rot_margin_top = (p_height - rot_dia)/2;

    $("#rotary-nav-cont").css({
        "height": rot_dia,
        "width": rot_dia,
        "margin-left": rot_margin_left + "px",
        "margin-top": rot_margin_top + "px"
    });
  }