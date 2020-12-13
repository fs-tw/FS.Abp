var abp = abp || {};
$(function () {
    abp.modals.languageManagementTextEdit = function () {
        var initModal = function (publicApi, args) {
            var $form = publicApi.getForm();

            $('#NextId').val('false');

            $('#RestoreToDefaultButton').click(function () {
                $('#LanguageTextToEdit_RestoreToDefault').val('true');
            });

            $('#SaveAndNextButton').click(function () {
                $('#NextId').val('true');
            });
        };

        return {
            initModal: initModal
        }
    };
});