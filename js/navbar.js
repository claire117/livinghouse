$(".menu-icon").click(function () {
    if ($(".navbar").hasClass("active")) {
        //如果有.active這個類別就移除類別
        $(".navbar").removeClass("active");
        $(".navbar").slideUp();
        $(".menu-icon").find("i").removeClass("fas fa-times fa-2x");
        $(".menu-icon").find("i").addClass("fas fa-bars fa-2x");
    } else {
        //如果沒有.active這個類別就新增類別
        $(".navbar").addClass("active");
        $(".navbar").slideDown();
        $(".menu-icon").find("i").removeClass("fas fa-bars fa-2x");
        $(".menu-icon").find("i").addClass("fas fa-times fa-2x");
    }
}) // .menu-icon click end

$(window).resize(function () {
    console.log($(window).width());
    if ($(window).outerWidth() >= 992) {
        $(".navbar").show();
    } else {
        $(".navbar").hide();
    }
}) //window resize end




$(document).ready(function () {
    $('.carousel-container').slick({
        dots: true,
        centerMode: true,
        arrows: true,
        slidesToShow: 1
    });
});


// $('.carousel-container').slick();



