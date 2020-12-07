var abp = abp || {};
(function () {
    var bodyScrollAdded = false;

    function handleScroll() {
        window.addEventListener('scroll', function (e) {
            var minHeight = 30;
            var currentHeight = window.scrollY;
            if (currentHeight > minHeight) {
                if (!bodyScrollAdded) {
                    abp.utils.addClassToTag('body', 'scrolled');
                    bodyScrollAdded = true;
                }
            } else {
                if (bodyScrollAdded) {
                    abp.utils.removeClassFromTag('body', 'scrolled');
                    bodyScrollAdded = false;
                }
            }
        });
    }

    function onDomReady() {
        handleScroll();
    }

    abp.domReady(onDomReady);

})();
