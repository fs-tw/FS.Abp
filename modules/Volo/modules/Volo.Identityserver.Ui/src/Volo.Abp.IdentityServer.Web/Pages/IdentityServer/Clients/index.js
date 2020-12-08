(function($) {
    var l = abp.localization.getResource('AbpIdentityServer');

    var _createModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'IdentityServer/Clients/Create',
        modalClass: 'clientCreate'
    });

    var _editModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'IdentityServer/Clients/Edit',
        modalClass: 'clientUpdate'
    });

    var _permissionsModal = new abp.ModalManager(abp.appPath + 'AbpPermissionManagement/PermissionManagementModal');

    var _dataTable = null;

    abp.ui.extensions.entityActions.get("identityServer.client").addContributor(
        function(actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l('Edit'),
                        visible: abp.auth.isGranted('IdentityServer.Client.Update'),
                        action: function (data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('Permissions'),
                        visible: abp.auth.isGranted('IdentityServer.Client.ManagePermissions'),
                        action: function (data) {
                            _permissionsModal.open({
                                providerName: 'C',
                                providerKey: data.record.clientId
                            });
                        }
                    },
                    {
                        text: l('ChangeHistory'),
                        visible: abp.auditLogging && abp.auth.isGranted('AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.Clients.Client'),
                        action: function (data) {
                            abp.auditLogging.openEntityHistoryModal(
                                "Volo.Abp.IdentityServer.Clients.Client",
                                data.record.id
                            );
                        }
                    },
                    {
                        text: l('Delete'),
                        visible: abp.auth.isGranted('IdentityServer.Client.Delete'),
                        confirmMessage: function (data) { return l('ClientsDeletionWarningMessage') },
                        action: function (data) {
                            volo.abp.identityServer.clients
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

    abp.ui.extensions.tableColumns.get("identityServer.client").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l("Actions"),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("identityServer.client").actions.toArray()
                        }
                    },
                    {
                        title: l("ClientId"),
                        data: "clientId"
                    }
                ]
            );
        },
        0 //adds as the first contributor
    );

    $(function () {

        var _$wrapper = $('#ClientsWrapper');

        var getFilter = function () {
            return {
                filter: _$wrapper.find('input.page-search-filter-text').val()
            };
        };

        _dataTable = $('#ClientsTable').DataTable(abp.libs.datatables.normalizeConfiguration({
            processing: true,
            serverSide: true,
            paging: true,
            scrollX: true,
            searching: false, 
            scrollCollapse: true,
            order: [[1, "desc"]],
            ajax: abp.libs.datatables.createAjax(volo.abp.identityServer.clients.getList,getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("identityServer.client").columns.toArray()
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