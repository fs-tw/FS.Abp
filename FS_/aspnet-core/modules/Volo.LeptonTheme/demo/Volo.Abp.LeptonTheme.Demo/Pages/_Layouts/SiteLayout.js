(function () {

    //write code that doesn't require page ready
    abp.log.debug('SiteLayout script loaded');

    $(function () {
           
        var e = document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropright");
        [].forEach.call(e, function (o) {
            "mouseenter mouseleave click".split(" ").forEach(function (t) {
                o.addEventListener(t, function () {
                    if (991 < window.innerWidth) {
                        var e = o.querySelector('[data-toggle="dropdown"]');
                        "mouseenter" === t ? (o.classList.add("hovered"), $(e).dropdown("show")) : ($(e).dropdown("hide"), e.blur())
                    }
                })
            })
        });

        abp.log.debug('DOM ready!');

    });

})();
