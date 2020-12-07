var abp = abp || {};
$(function () {
    abp.modals.languageCreate = function () {
        var initModal = function (publicApi, args) {
            var $form = publicApi.getForm();

            $('#Language_CultureName').change(function () {
                $("#Language_UiCultureName").val($('#Language_CultureName').val());
                $("#Language_DisplayName").val($('#Language_CultureName option:selected').text());
            });

            function addFlag(state) {
                var $state = $(
                    '<span class="flag-icon flag-icon-' + state.id + '  flag-icon-squared"> </span><span> ' + state.text + '</span>'
                );
                return $state;
            };

            $(".flag-select").select2({
                templateResult: addFlag,
                minimumResultsForSearch: -1
            });
        };

        return {
            initModal: initModal
        };
    };
});