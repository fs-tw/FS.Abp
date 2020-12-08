const inputs = document.querySelectorAll('.color-box > input')
const root = document.documentElement

inputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})

function handleInputChange(e) {
    let value = e.target.value
    let inputId = e.target.parentNode.id
    let inputBg = `--${inputId}`
    root.style.setProperty(inputBg, value)
}

function handleSlider(e) {
    let value = e.target.value
    root.style.setProperty('--slider', value)
}

//////////////

$(document).ready(function () {
    var styleCookieName = 'Volo_Abp_LeptonTheme_Style';
    var layoutCookieName = 'Volo_Abp_LeptonTheme_Layout';
    var layoutBoxedCookieName = 'Volo_Abp_LeptonTheme_Layout_Boxed';
    var layoutMenuPlacementCookieName = 'Volo_Abp_LeptonTheme_Layout_MenuPlacement';
    var layoutMenuStatusCookieName = 'Volo_Abp_LeptonTheme_Layout_MenuStatus';
    
    
    var selectedStyleId = abp.utils.getCookieValue(styleCookieName);
    
    replaceSelectedStyle(selectedStyleId, false, false);

    function replaceSelectedStyle(styleId, writeToCookie, refreshPage){
        $('#lepton-demo-styles').find(".selected-style").removeClass("selected-style");
        
        styleId = styleId || 1;
        $(".demo-style-" + styleId).addClass("selected-style");
        
        if(writeToCookie){
            writeCookie(styleCookieName, 'Style' + styleId);
        }
        
        if(refreshPage){
            location.reload();
        }
    }
    
    function writeCookie(key, val, time){
        if(!time){
            var tenYearsLater = new Date();
            tenYearsLater.setTime(tenYearsLater.getTime() + (365 * 24 * 60 * 60 * 1000));
            
            time = tenYearsLater;
        }
        
        abp.utils.setCookieValue(key, val, time, '/');
    }
    
    $(".demo-toggler").on("click", function () {
        $('.demo-container').toggleClass("demo-open");
    });

    $('.demo-style').on("click", function () {
        var selectedStyleValue = $(this).attr('style-val');
        
        replaceSelectedStyle(selectedStyleValue, true, true);
    });
    
    if ($('#LeptonThemeSettingsForm').length > 0) {
        var applyLayoutSettingCookie = function (setStyle) {
            var cookie = abp.utils.getCookieValue("LeptonThemeDemoPreferences");

            if (!cookie || cookie === '') {
                cookie = 'menuPlacement:left|MenuStatus:0|boxed:false`|style:demo-style-1';
            }

            var cookieValues = cookie.split("|");
            var menuPlacement = '';
            var menuStatus = '';
            var boxed = '';
            var style = '';

            for (var i = 0; i < cookieValues.length; i++) {
                var keyValueArr = cookieValues[i].split(":");
                var key = keyValueArr[0];
                var value = keyValueArr[1];

                if (key === 'menuPlacement') {
                    menuPlacement = value;
                }
                else if (key === 'menuStatus') {
                    menuStatus = value;
                }
                else if (key === 'boxed') {
                    boxed = value;
                }
                else if (key === 'style') {
                    style = value;
                }
            }

            $('body').removeClass('lp-boxed');
            $('body').removeClass('lp-topmenu');
            $('body').removeClass('lp-opened-sidebar');
            $('body').removeClass('lp-closed');

            if (boxed.toLowerCase() === 'true') {
                $('body').addClass('lp-boxed');
                $('#BoxedLayout').prop('checked', true);
            }
            else {
                $('#BoxedLayout').prop('checked', false);
            }

            if (menuPlacement == 1) {
                $('body').addClass('lp-topmenu');
                $("#MenuPlacement").attr('selectedIndex', 1);
                $("#MenuPlacement").val(1);
            }
            else {
                $("#MenuPlacement").attr('selectedIndex', 0);
                $("#MenuPlacement").val(0);

                if (menuStatus == 0) {
                    $('body').addClass('lp-opened-sidebar');

                    $("#MenuStatus").attr('selectedIndex', 0);
                    $("#MenuStatus").val(0);
                }
                else if (menuStatus == 1) {
                    $('body').addClass('lp-closed');

                    $("#MenuStatus").attr('selectedIndex', 1);
                    $("#MenuStatus").val(1);
                }
            }

            if (setStyle) {
                //$('.' + style).click();
            }
        };

        var setLayoutSettingCookie = function (e) {
            if (e) {
                e.preventDefault();
            }


            var form = $('#LeptonThemeSettingsForm').serializeFormToObject();

            var formAsString =
                'menuPlacement:' +
                form.menuPlacement +
                '|' +
                'menuStatus:' +
                form.menuStatus +
                '|' +
                'boxed:' +
                form.boxedLayout +
                '|' +
                'style:' +
                $('.selected-style').attr('style-id');
            
            // TODO this will be removed.
            writeCookie('LeptonThemeDemoPreferences', formAsString)
            
            writeCookie(layoutMenuPlacementCookieName, (form.menuPlacement === '0' ? 'Left' : 'Top'));
            writeCookie(layoutMenuStatusCookieName, form.menuStatus);
            writeCookie(layoutBoxedCookieName, form.boxedLayout );
            
            applyLayoutSettingCookie();
        };

        $('#LeptonThemeSettingsForm input').on('change', '', function (e) {
            setLayoutSettingCookie(e);
        });

        $('#LeptonThemeSettingsForm select').on('change', '', function (e) {
            setLayoutSettingCookie(e);
        });
        
        applyLayoutSettingCookie(true);
    }
});