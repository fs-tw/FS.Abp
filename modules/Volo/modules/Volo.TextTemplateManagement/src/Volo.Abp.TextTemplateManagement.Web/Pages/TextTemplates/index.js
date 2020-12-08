(function ($) {

    var l = abp.localization.getResource("TextTemplateManagement");

    var templateDefinitionService = window.volo.abp.textTemplateManagement.textTemplates.templateDefinition;

    abp.ui.extensions.entityActions.get("textTemplateManagement.textDefinition").addContributor(
        function (actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l("EditContents"),
                        visible: abp.auth.isGranted('TextTemplateManagement.TextTemplates.EditContents'),
                        action: function (data) {
                            if (data.record.isInlineLocalized) {
                                window.location = "TextTemplates/Contents/InlineContent/" + data.record.name;
                            } else {
                                window.location = "TextTemplates/Contents/" + data.record.name;
                            }
                        }
                    }
                ]
            );
        }
    );

    abp.ui.extensions.tableColumns.get("textTemplateManagement.textDefinition").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l("Actions"),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("textTemplateManagement.textDefinition").actions.toArray()
                        }
                    },
                    {
                        title: l("Name"),
                        data: "name"
                    },
                    {
                        title: l("DisplayName"),
                        data: "displayName"
                    },
                    {
                        title: l("IsInlineLocalized"),
                        data: "isInlineLocalized",
                        render: function (isInlineLocalized) {
                            return isInlineLocalized ? l("Yes") : l("No");
                        }
                    },
                    {
                        title: l("IsLayout"),
                        data: "isLayout",
                        render: function (isLayout) {
                            return isLayout ? l("Yes") : l("No");
                        }
                    },
                    {
                        title: l("Layout"),
                        data: "layout"
                    },
                    {
                        title: l("DefaultCultureName"),
                        data: "defaultCultureName"
                    }
                ]
            );
        },
        0 //adds as the first contributor
    );

    $(function () {

        var _$wrapper = $('#TextTemplatesWrapper');

        var getFilter = function () {
            return {
                filterText: _$wrapper.find('input.page-search-filter-text').val()
            };
        }

        var dataTable = $("#TemplateDefinitionsTable").DataTable(abp.libs.datatables.normalizeConfiguration({
            processing: true,
            serverSide: true,
            paging: true,
            searching: false,
            autoWidth: true,
            scrollCollapse: true,
            order: [[1, "asc"]],
            ajax: abp.libs.datatables.createAjax(templateDefinitionService.getList, getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("textTemplateManagement.textDefinition").columns.toArray()
        }));

        _$wrapper.find('form.page-search-form').submit(function(e) {
            e.preventDefault();
            dataTable.ajax.reload();
        });
    });
})(jQuery);