(function ($) {
    var l = abp.localization.getResource('AbpIdentityServer');

    var _createModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'IdentityServer/IdentityResources/Create',
        modalClass: 'identityResourceCreate'
    });
    var _editModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'IdentityServer/IdentityResources/Edit',
        modalClass: 'identityResourceUpdate'
    });

    var _dataTable = null;

    abp.ui.extensions.entityActions.get("identityServer.identityResource").addContributor(
        function(actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l('Edit'),
                        visible: abp.auth.isGranted('IdentityServer.IdentityResource.Update'),
                        action: function (data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('ChangeHistory'),
                        visible: abp.auditLogging && abp.auth.isGranted('AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.IdentityResources.IdentityResource'),
                        action: function (data) {
                            abp.auditLogging.openEntityHistoryModal(
                                "Volo.Abp.IdentityServer.IdentityResources.IdentityResource",
                                data.record.id
                            );
                        }
                    },
                    {
                        text: l('Delete'),
                        visible: abp.auth.isGranted('IdentityServer.IdentityResource.Delete'),
                        confirmMessage: function (data) { return l('IdentityResourcesDeletionWarningMessage') },
                        action: function (data) {
                            volo.abp.identityServer.identityResources
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

    abp.ui.extensions.tableColumns.get("identityServer.identityResource").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l("Actions"),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("identityServer.identityResource").actions.toArray()
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

        var _$wrapper = $('#IdentityResourcesWrapper');

        var getFilter = function () {
            return {
                filter: _$wrapper.find('input.page-search-filter-text').val()
            };
        };

        _dataTable = $('#IdentityResourcesTable').DataTable(abp.libs.datatables.normalizeConfiguration({
            processing: true,
            serverSide: true,
            paging: true,
            scrollX: true,
            searching: false,
            scrollCollapse: true,
            order: [[1, "desc"]],
            ajax: abp.libs.datatables.createAjax(volo.abp.identityServer.identityResources.getList,getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("identityServer.identityResource").columns.toArray()
        }));

        $("#CreateNewIdentityResourceButton").click(function () {
            _createModal.open();
        });

        _createModal.onClose(function () {
            _dataTable.ajax.reload(null, false);
        });

        _editModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        $("#CreateStandardIdentityResourcesButton").click(function () {
            abp.message.confirm(l('CreateStandardIdentityResourcesWarningMessage'),
                function (result) {
                    if (result) {
                        volo.abp.identityServer.identityResources
                            .createStandardResources()
                            .then(function () {
                                _dataTable.ajax.reload(null, false);
                            });
                    }
                });
        });

        _$wrapper.find('form.page-search-form').submit(function (e) {
            e.preventDefault();
            _dataTable.ajax.reload();
        });
    });
})(jQuery);
