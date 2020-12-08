(function () {

    var l = abp.localization.getResource('Saas');
    var _tenantAppService = volo.saas.host.tenant;

    var _editModal = new abp.ModalManager(abp.appPath + 'Saas/Host/Tenants/EditModal');
    var _createModal = new abp.ModalManager(abp.appPath + 'Saas/Host/Tenants/CreateModal');
    var _featuresModal = new abp.ModalManager(abp.appPath + 'FeatureManagement/FeatureManagementModal');
    var _connectionStringsModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'Saas/Host/Tenants/ConnectionStringsModal',
        modalClass: 'TenantConnectionStringManagement'
    });

    var _dataTable = null;
    abp.ui.extensions.entityActions.get("saas.tenant").addContributor(
        function(actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l('Edit'),
                        visible: abp.auth.isGranted('Saas.Tenants.Update'),
                        action: function (data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('ConnectionStrings'),
                        visible: abp.auth.isGranted('Saas.Tenants.ManageConnectionStrings'),
                        action: function (data) {
                            _connectionStringsModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('Features'),
                        visible: abp.auth.isGranted('Saas.Tenants.ManageFeatures'),
                        action: function (data) {
                            _featuresModal.open({
                                providerName: 'T',
                                providerKey: data.record.id
                            });
                        }
                    },
                    {
                        text: l('ChangeHistory'),
                        visible: abp.auditLogging && abp.auth.isGranted('AuditLogging.ViewChangeHistory:Volo.Saas.Tenant'),
                        action: function (data) {
                            abp.auditLogging.openEntityHistoryModal(
                                "Volo.Saas.Tenant",
                                data.record.id
                            );
                        }
                    },
                    {
                        text: l('Delete'),
                        visible: abp.auth.isGranted('Saas.Tenants.Delete'),
                        confirmMessage: function (data) { return l('TenantDeletionConfirmationMessage', data.record.name) },
                        action: function (data) {
                            _tenantAppService
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

    abp.ui.extensions.tableColumns.get("saas.tenant").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l("Actions"),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("saas.tenant").actions.toArray()
                        }
                    },
                    {
                        title: l("TenantName"),
                        data: "name"
                    },
                    {
                        title: l("Edition"),
                        data: "editionName",
                        orderable: false
                    }
                ]
            );
        },
        0 //adds as the first contributor
    );

    $(function () {

        var _$wrapper = $('#TenantsWrapper');

        var getFilter = function () {
            return {
                filter: _$wrapper.find("input.page-search-filter-text").val()
            };
        };

        _dataTable = _$wrapper.find('table').DataTable(abp.libs.datatables.normalizeConfiguration({
            processing: true,
            serverSide: true,
            paging: true,
            scrollX: true,
            searching: false, 
            scrollCollapse: true,
            order: [[1, "asc"]],
            ajax: abp.libs.datatables.createAjax(_tenantAppService.getList,getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("saas.tenant").columns.toArray()
        }));

        _createModal.onResult(function () {
            _dataTable.ajax.reload(null, false );
        });

        _editModal.onResult(function () {
            _dataTable.ajax.reload(null, false );
        });

        $('#AbpContentToolbar button[name=CreateTenant]').click(function (e) {
            e.preventDefault();
            _createModal.open();
        });

        $('#AbpContentToolbar button[name=ManageHostFeatures]').click(function (e) {
            e.preventDefault();
            _featuresModal.open({
                providerName: 'T'
            });
        });

        _$wrapper.find("form.page-search-form").submit(function (e) {
            e.preventDefault();
            _dataTable.ajax.reload();
        });
    });

})();
