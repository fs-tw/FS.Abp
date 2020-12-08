var abp = abp || {};
$(function () {
    abp.modals.languageEdit = function () {
        var initModal = function (publicApi, args) {
            var $form = publicApi.getForm();

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