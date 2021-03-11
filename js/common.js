/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-01-30 17:06:51
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-11 16:41:20
 */
$(function () {

    // 导航
    !(function () {
        $(".web-header").each(function () {
            var header = $(this);
            var search = $(this).find(".search-bar");
            var searchOpenSwitch = $(this).find(".search-bar-show");
            var searchCloseSwitch = $(this).find(".search-bar-close");
            var navSwitch = $(this).find(".web-nav-switch");
            var nav = $(this).find(".web-nav");
            var mobileBlank = $(this).find(".mobile-blank");

            nav.lavaLamp({ fx: "swing", speed: 500 });

            searchOpenSwitch.click(function () {
                search.slideDown();
            })

            searchCloseSwitch.click(function () {
                search.slideUp();
            })

            header.mouseleave(function () {
                search.slideUp();
            })

            navSwitch.click(function () {
                if (navSwitch.hasClass("active")) {
                    navSwitch.stop().removeClass("active");
                    nav.removeClass("active");
                    $("html").css({ "overflow-y": "auto" });
                } else {
                    navSwitch.addClass("active");
                    mobileBlank.fadeIn();
                    nav.addClass("active");
                    $("html").css({ "overflow-y": "hidden" });
                }
            })

            mobileBlank.click(function () {
                mobileBlank.fadeOut();
                navSwitch.stop().removeClass("active");
                nav.removeClass("active");
                $("html").css({ "overflow-y": "auto" });
            })
        })

    })()

})