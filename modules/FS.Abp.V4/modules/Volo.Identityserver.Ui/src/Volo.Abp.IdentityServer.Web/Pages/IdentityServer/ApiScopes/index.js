(function ($) {

    var l = abp.localization.getResource('AbpIdentityServer');

    var _createModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'IdentityServer/ApiScopes/Create',
        modalClass: 'apiScopeCreate'
    });
    var _editModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'IdentityServer/ApiScopes/Edit',
        modalClass: 'apiScopeUpdate'
    });

    var _dataTable = null;

    abp.ui.extensions.entityActions.get("identityServer.apiScope").addContributor(
        function (actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l('Edit'),
                        visible: abp.auth.isGranted('IdentityServer.ApiScope.Update'),
                        action: function (data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('ChangeHistory'),
                        visible: abp.auditLogging && abp.auth.isGranted('AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.ApiScopes.ApiScope'),
                        action: function (data) {
                            abp.auditLogging.openEntityHistoryModal(
                                "Volo.Abp.IdentityServer.ApiScopes.ApiScope",
                                data.record.id
                            );
                        }
                    },
                    {
                        text: l('Delete'),
                        visible: abp.auth.isGranted('IdentityServer.ApiScope.Delete'),
                        confirmMessage: function (data) {
                            return l('ApiScopesDeletionWarningMessage');
                        },
                        action: function (data) {
                            volo.abp.identityServer.apiScopes
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

    abp.ui.extensions.tableColumns.get("identityServer.apiScope").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l("Actions"),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("identityServer.apiScope").actions.toArray()
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

        var _$wrapper = $('#ApiScopesWrapper');

        var getFilter = function () {
            return {
                filter: _$wrapper.find('input.page-search-filter-text').val()
            };
        };

        _dataTable = $('#ApiScopesTable').DataTable(abp.libs.datatables.normalizeConfiguration({
            processing: true,
            serverSide: true,
            paging: true,
            scrollX: true,
            searching: false,
            scrollCollapse: true,
            order: [[1, "desc"]],
            ajax: abp.libs.datatables.createAjax(volo.abp.identityServer.apiScopes.getList, getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("identityServer.apiScope").columns.toArray()
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
