(function ($) {

    var l = abp.localization.getResource('LanguageManagement');
    var _languageAppService = volo.abp.languageManagement.language;

    var _editModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'LanguageManagement/Edit',
        modalClass: 'languageEdit'
    });

    var _createModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'LanguageManagement/Create',
        modalClass: 'languageCreate'
    });

    var _dataTable = null;

    abp.ui.extensions.entityActions.get("languageManagement.language").addContributor(
        function (actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l("Edit"),
                        visible: abp.auth.isGranted('LanguageManagement.Languages.Edit'),
                        action: function (data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l("Delete"),
                        visible: abp.auth.isGranted('LanguageManagement.Languages.Delete'),
                        confirmMessage: function (data) {
                            return l('LanguageDeletionConfirmationMessage', data.record.displayName);
                        },
                        action: function (data) {
                            _languageAppService.delete(data.record.id).done(function () {
                                _dataTable.ajax.reload(null, false);
                            });
                        }
                    },
                    {
                        text: l("SetAsDefaultLanguage"),
                        visible: abp.auth.isGranted('LanguageManagement.Languages.ChangeDefault'),
                        action: function (data) {
                            _languageAppService.setAsDefault(data.record.id).done(function () {
                                _dataTable.ajax.reload(null, false);
                            });
                        }
                    }
                ]
            );
        }
    );

    abp.ui.extensions.tableColumns.get("languageManagement.language").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l("Actions"),
                        rowAction:
                            {
                                items: abp.ui.extensions.entityActions.get("languageManagement.language").actions.toArray()
                            }
                    },
                    {
                        title: l("DisplayName"),
                        data: {displayName: "displayName", isDefaultLanguage: "isDefaultLanguage"},
                        render: function (data) {
                            if (data.isDefaultLanguage) {
                                return "<strong>" + data.displayName + " (" + l("DefaultLanguage") + ")</strong>";
                            } else {
                                return "<span>" + data.displayName + "</span>";
                            }
                        }
                    },
                    {
                        title: l("CultureName"),
                        data: "cultureName"
                    },
                    {
                        title: l("UiCultureName"),
                        data: "uiCultureName"
                    },
                    {
                        title: l("IsEnabled"),
                        data: "isEnabled",
                        render: function (data) {
                            if (data) {
                                return '<i class="fa fa-check"></i>';
                            } else {
                                return '<i class="fa fa-ban"></i>';
                            }
                        }
                    }
                ]
            );
        },
        0 //adds as the first contributor
    );

    $(function () {

        var _$wrapper = $("#LanguagesWrapper");
        
        var getFilter = function () {
            return {
                filter: _$wrapper.find('input.page-search-filter-text').val()
            };
        };

        _dataTable = $('#LanguagesTable').DataTable(abp.libs.datatables.normalizeConfiguration({
            processing: true,
            serverSide: true,
            paging: true,
            scrollX: true,
            ordering: false,
            searching: false,
            ajax: abp.libs.datatables.createAjax(volo.abp.languageManagement.language.getList, getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("languageManagement.language").columns.toArray()
        }));

        $("#CreateNewLanguageButtonId").click(function () {
            _createModal.open();
        });

        _editModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        _createModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        _$wrapper.find('form.page-search-form').submit(function (e) {
            e.preventDefault();
            _dataTable.ajax.reload();
        });
    });

})(jQuery);
