"use strict";
$(window).scroll(function () {
    var topPos = $(window).scrollTop();
    var enoughHeight = 30;
    if (topPos > enoughHeight) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
});

//

function closeNavigate() {
    $("body").removeClass("lp-opened-sidebar").removeClass("lp-body-fixed").addClass("lp-closed");
}
function openNavigate() {
    $("body").addClass("lp-body-fixed").addClass("lp-opened-sidebar").removeClass("lp-closed");
}
function onMouseEnter() {
    if ($("body").hasClass("lp-closed")) {
        $("body").addClass("lp-extended");
    }
}
function onMouseLeave() {
    if ($("body").hasClass("lp-closed")) {
        $("body").removeClass("lp-extended");
    }
}
function toggleHtml(ele) {
    var refreshIntervalId = '';

    $(ele).on("mouseenter", function () {
        refreshIntervalId = setInterval(onMouseEnter, 400);

    });
    $(ele).on("mouseleave", function () {
        clearInterval(refreshIntervalId);
        setTimeout(onMouseLeave, 400);
    });
}

$(document).ready(function () {
    var hasTopMenu = $("body").hasClass("lp-topmenu");

    if (!hasTopMenu) {
        toggleHtml(".lp-sidebar");

        $("body").addClass("lp-opened-sidebar");


        $(".lp-toggle-sidebar").on("click", function () {
            $("body").hasClass("lp-opened-sidebar") ? closeNavigate() : openNavigate();
        });

        $(".lp-sidebar-navi li.current > ul").css("display", "block");

        $(".lp-sidebar-navi a").on("click", function (e) {
            var navItem = $(this);
            var navItemParent = navItem.parent();

            if ($(this).next().is("ul")) {
                e.preventDefault()
                if (navItemParent.hasClass("current")) {
                    navItemParent.removeClass("current");
                    navItem.next().hide(200);
                } else {
                    navItemParent.parent().find(".current ul").hide(200);
                    navItemParent.parent().find("li").removeClass("current");
                    navItemParent.toggleClass("current");
                    navItem.next().slideToggle(200);
                }
            } else {
                navItemParent.parent().find(".current ul").hide(200);
                navItemParent.parent().find("li").removeClass("current");
                navItemParent.addClass("current");
            }
        });
    }
});

//


function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

var onAppLayout = $("body").hasClass("abp-application-layout");

if (onAppLayout) {
    document.getElementById('btnFullscreen').addEventListener('click', function () {
        toggleFullscreen();
    });

    $("#btnFullscreen").click(function () {
        $(this).toggleClass("expanded");
    });
}

$(window).on("load", function () {
    if ($(window).width() > 1023) {
        if (!$("body").hasClass("lp-topmenu")) {
            $(".lp-sidebar-wrapper").mCustomScrollbar({
                theme: "minimal"
            });
        }
        $(".dropdown-menu-notifications .list-group").mCustomScrollbar({
            theme: "minimal-dark"
        });
        $(".custom-scroll").mCustomScrollbar({
            theme: "minimal-dark"
        });
        //$(".lp-content > .row > div > .card > .card-body").mCustomScrollbar({
        //    theme: "minimal-dark"
        //});
        $(".messages-box").mCustomScrollbar({
            theme: "minimal-dark",
            mouseWheelPixels: 500
        });
        $(".chat-box").mCustomScrollbar({
            theme: "minimal-dark",
            mouseWheelPixels: 500
        });
    }
});

$('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    $("html").toggleClass("openNav");
    $(".nav-toggle").toggleClass("active");
});

$('.downarrow').on('click', function (e) {
    $(this).parent().toggleClass("active-label");
    $(this).parent().parent().toggleClass("active-li");
});


var e = document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropright");
[].forEach.call(e, function (o) {
    "mouseenter mouseleave ".split(" ").forEach(function (t) {
        o.addEventListener(t, function () {
            if (991 < window.innerWidth) {
                var e = o.querySelector('[data-toggle="dropdown"]');
                "mouseenter" === t ? (o.classList.add("hovered"), $(e).dropdown("show")) : ($(e).dropdown("hide"), e.blur())
            }
        })
    })
});
