$(function () {
    var l = abp.localization.getResource("TextTemplateManagement");

    var templateContentsService = window.volo.abp.textTemplateManagement.textTemplates.templateContent;

    var getTemplateDefinitionName = () => {
        return $('#TemplateInlineContentForm').attr('definition');
    }
    var getTemplateContent = () => {
        return $('#TemplateContent').val();
    }

    function fillContent() {
        templateContentsService.get({
            templateName: getTemplateDefinitionName()
        }).then(function (r) {
            $('#TemplateContent').val(r.content);
        });
    }

    function restoreToDefault(isConfirm) {
        if (isConfirm) {
            templateContentsService.restoreToDefault({
                    templateName: getTemplateDefinitionName()
                }).then(function () {
                fillContent();
                abp.message.success(l('TemplateContentRestoredToDefault'), l('Success'));
            });
        }
    }

    $('#save-content').click(function () {
        templateContentsService.update({
                templateName: getTemplateDefinitionName(),
                content: getTemplateContent()
            }).then(function () {
            fillContent();
            abp.message.success(l('TemplateContentUpdated'), l('Success'));
        });
    });

    $('#restore-to-default').click(function () {
        abp.message.confirm(
            l("RestoreToDefaultMessage"),
            l("RestoreToDefault"),
            restoreToDefault,
            true
        );
    });

    $('#edit-unique-localization').click(function () {
        window.location = "/TextTemplates/Contents/" + getTemplateDefinitionName();
    });
});