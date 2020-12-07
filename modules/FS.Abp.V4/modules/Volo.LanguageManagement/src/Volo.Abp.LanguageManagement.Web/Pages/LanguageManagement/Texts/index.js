(function ($) {
    var l = abp.localization.getResource('LanguageManagement');

    var _editModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'LanguageManagement/Texts/Edit',
        modalClass: 'languageManagementTextEdit'
    });

    var lastKey = '';

    abp.ui.extensions.entityActions.get("languageManagement.texts").addContributor(
        function(actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l("Edit"),
                        visible: abp.auth.isGranted('LanguageManagement.Languages.Edit'),
                        action: function (data) {
                            lastKey = data.record.name;
                            _editModal.open({
                                name: data.record.name,
                                targetCultureName: data.record.cultureName,
                                resourceName: data.record.resourceName,
                                baseCultureName: data.record.baseCultureName
                            });
                        }
                    },
                ]
            );
        }
    );

    $(function () {
        var _dataTable = $('#LanguageTextsTable').DataTable(abp.libs.datatables.normalizeConfiguration({
            processing: true,
            serverSide: true,
            paging: true,
            scrollX: true,
            searching: false, 
            scrollCollapse: true,
            order: [[1, "asc"]],
            ajax: abp.libs.datatables.createAjax(volo.abp.languageManagement.languageText.getList,
                function () {
                    return $("#FilterFormId").serializeFormToObject();
                }
            ),
            columnDefs: [
                {
                    rowAction:
                    {
                        text: l('Actions'),
                        items: abp.ui.extensions.entityActions.get("languageManagement.texts").actions.toArray()
                    }
                },
                {
                    data: "name"
                },
                {
                    data: "baseValue"
                },
                {
                    data: "value"
                },
                {
                    data: "resourceName"
                }
            ]
        }));

        $("#FilterFormId").submit(function (e) {
            e.preventDefault();
            _dataTable.ajax.reload();
        });

        $('#FilterFormId').keypress(function (e) {
            if (e.which == 13) {
                $('#FilterFormId').submit();
            }
        });

        $('#BaseCultureName').change(function () {
            $("#FilterFormId").submit();
        });

        $('#TargetCultureName').change(function () {
            $("#FilterFormId").submit();
        });

        $('#ResourceName').change(function () {
            $("#FilterFormId").submit();
        });

        $('#GetOnlyEmptyValues').change(function () {
            $("#FilterFormId").submit();
        });

        _editModal.onClose(function () {
            _dataTable.ajax.reload();
        });

        _editModal.onResult(function () {
            // closes all active pop ups.
            $('.modal').modal('hide');
            $('.modal-backdrop').remove();

            if (lastKey === '' || $('.modal #NextId').val() === 'false') {
                lastKey = '';
                _dataTable.ajax.reload();
                return;
            }

            var data = _dataTable.rows().data();

            for (var i = 0; i < data.length - 1; i++) {
                if (data[i].name === lastKey) {

                    if (i < data.length - 2) {
                        lastKey = data[i + 1].name; // save this key
                    }
                    else {
                        lastKey = ''; // don't save this key if it's last one
                    }

                    _editModal.open({ // open next modal
                        name: data[i + 1].name,
                        targetCultureName: data[i + 1].cultureName,
                        resourceName: data[i + 1].resourceName,
                        baseCultureName: data[i + 1].baseCultureName
                    });

                    break;
                }
            }
        });

        $('#FilterFormSubmitButtonId').on('click', function () {
            $('#FilterFormId').submit();
        });
    });
})(jQuery);