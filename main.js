$(document).ready(function () {
  $(".sidebar-item").each(function (index, item) {
    const subContent = $(".sub-menu-content-item");
    const pane = subContent.eq(index);
    $(item).on("mouseover", function () {
      $(".sub-menu-content-item.active").removeClass("active");
      pane.addClass("active");
    });
  });
  $(".banner-imgs").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: true,
  });
});
