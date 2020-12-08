(function ($) {

    var l = abp.localization.getResource('AbpIdentityServer');

    var _createModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'IdentityServer/ApiResources/Create',
        modalClass: 'apiResourceCreate'
    });
    var _editModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'IdentityServer/ApiResources/Edit',
        modalClass: 'apiResourceUpdate'
    });

    var _dataTable = null;

    abp.ui.extensions.entityActions.get("identityServer.apiResource").addContributor(
        function (actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l('Edit'),
                        visible: abp.auth.isGranted('IdentityServer.ApiResource.Update'),
                        action: function (data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('ChangeHistory'),
                        visible: abp.auditLogging && abp.auth.isGranted('AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.ApiResources.ApiResource'),
                        action: function (data) {
                            abp.auditLogging.openEntityHistoryModal(
                                "Volo.Abp.IdentityServer.ApiResources.ApiResource",
                                data.record.id
                            );
                        }
                    },
                    {
                        text: l('Delete'),
                        visible: abp.auth.isGranted('IdentityServer.ApiResource.Delete'),
                        confirmMessage: function (data) {
                            return l('ApiResourcesDeletionWarningMessage');
                        },
                        action: function (data) {
                            volo.abp.identityServer.apiResources
                                .delete(data.record.id)
                                .then(function () {
                                    _dataTable.ajax.reload(null, false);
                                });
                        }
                    }
                ]
            );
        }
    );

    abp.ui.extensions.tableColumns.get("identityServer.apiResource").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l("Actions"),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("identityServer.apiResource").actions.toArray()
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
                        title: l("Description"),
                        data: "description"
                    }
                ]
            );
        },
        0 //adds as the first contributor
    );

    $(function () {

        var _$wrapper = $('#ApiResourcesWrapper');

        var getFilter = function () {
            return {
                filter: _$wrapper.find('input.page-search-filter-text').val()
            };
        };

        _dataTable = $('#ApiResourcesTable').DataTable(abp.libs.datatables.normalizeConfiguration({
            processing: true,
            serverSide: true,
            paging: true,
            scrollX: true,
            searching: false,
            scrollCollapse: true,
            order: [[1, "desc"]],
            ajax: abp.libs.datatables.createAjax(volo.abp.identityServer.apiResources.getList, getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("identityServer.apiResource").columns.toArray()
        }));

        $("#CreateNewButtonId").click(function () {
            _createModal.open();
        });

        _createModal.onClose(function () {
            _dataTable.ajax.reload(null, false);
        });

        _editModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        _$wrapper.find('form.page-search-form').submit(function (e) {
            e.preventDefault();
            _dataTable.ajax.reload();
        });
    });
})(jQuery);
