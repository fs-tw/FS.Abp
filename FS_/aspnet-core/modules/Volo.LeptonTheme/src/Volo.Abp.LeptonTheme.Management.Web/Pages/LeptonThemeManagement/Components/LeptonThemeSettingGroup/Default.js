(function ($) {

    $(function () {

        $("#MenuPlacement").on('change', function() {
            var val = $(this).val();
            if (val == 0) {
                $("#MenuStatusGroup").slideDown();
            }
            else if (val == 1) {
                $("#MenuStatusGroup").slideUp();
            }
        });

        $("#LeptonThemeSettingsForm").on('submit', function (event) {
            event.preventDefault();
            var form = $(this).serializeFormToObject();

            volo.abp.leptonTheme.leptonThemeSettings.update(form).then(function(result) {
                $(document).trigger("AbpSettingSaved");
            });

        });

    });

})(jQuery);