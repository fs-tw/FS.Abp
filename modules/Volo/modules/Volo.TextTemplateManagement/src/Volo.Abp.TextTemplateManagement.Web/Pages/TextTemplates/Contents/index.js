$(function () {
    var l = abp.localization.getResource("TextTemplateManagement");

    var templateContentsService = window.volo.abp.textTemplateManagement.textTemplates.templateContent;

    var getTemplateDefinitionName = () => {
        return $('#FilterFormId').attr('definition');
    }

    var getTargetCultureName = () => {
        return $('#TargetCultureName').val();
    };
    var getTargetContent = () => {
        return $('#TargetContent').val();
    }

    $('select.culture-selector').change(function() {
        var value = $(this).val();
        var targetId = $(this).attr('target');

        templateContentsService.get({
            templateName: getTemplateDefinitionName(),
            cultureName: value
        }).then(function(r) {
            $('#' + targetId).val(r.content);
        });
    });

    reFillContent();

    function reFillContent() {
        templateContentsService.get({
            templateName: getTemplateDefinitionName(),
            cultureName: getTargetCultureName()
        }).then(function (r) {
            $('#TargetContent').val(r.content);
        });

        templateContentsService.get({
            templateName: getTemplateDefinitionName(),
            cultureName: $('#BaseCultureName').val()
        }).then(function (r) {
            $('#BaseContent').val(r.content);
        });
    }
    
    $('#restore-to-default').click(function () {
        abp.message.confirm(
                l("RestoreToDefaultMessage"),
                l("RestoreToDefault"),
                restoreToDefault,
                true
        );
    });

    $('#save-content').click(function () {
        templateContentsService.update({
                templateName: getTemplateDefinitionName(),
                cultureName: getTargetCultureName(),
                content: getTargetContent()
            }).then(function () {
                abp.message.success(l('TemplateContentUpdated'), l('Success'));
                reFillContent();
            });
    });

    function restoreToDefault(isConfirm) {
        if (isConfirm) {
            templateContentsService.restoreToDefault({
                    templateName: getTemplateDefinitionName(),
                    cultureName: getTargetCultureName()
                }).then(function() {
                    reFillContent();
                    abp.message.success(l('TemplateContentRestoredToDefault'), l('Success'));
                });
        }
    }

});