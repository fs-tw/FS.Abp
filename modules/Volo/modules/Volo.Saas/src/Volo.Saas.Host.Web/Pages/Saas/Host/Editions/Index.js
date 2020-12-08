(function () {

    var l = abp.localization.getResource('Saas');
    var _editionAppService = volo.saas.host.edition;

    var _editModal = new abp.ModalManager(abp.appPath + 'Saas/Host/Editions/EditModal');
    var _createModal = new abp.ModalManager(abp.appPath + 'Saas/Host/Editions/CreateModal');
    var _featuresModal = new abp.ModalManager(abp.appPath + 'FeatureManagement/FeatureManagementModal');

    var _dataTable = null;

    abp.ui.extensions.entityActions.get("saas.edition").addContributor(
        function(actionList) {
            actionList.addManyTail(
                [
                    {
                        text: l('Edit'),
                        visible: abp.auth.isGranted('Saas.Editions.Update'),
                        action: function (data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('Features'),
                        visible: abp.auth.isGranted('Saas.Editions.ManageFeatures'),
                        action: function (data) {
                            _featuresModal.open({
                                providerName: 'E',
                                providerKey: data.record.id
                            });
                        }
                    },
                    {
                        text: l('ChangeHistory'),
                        visible: abp.auditLogging && abp.auth.isGranted('AuditLogging.ViewChangeHistory:Volo.Saas.Edition'),
                        action: function (data) {
                            abp.auditLogging.openEntityHistoryModal(
                                "Volo.Saas.Edition",
                                data.record.id
                            );
                        }
                    },
                    {
                        text: l('Delete'),
                        visible: abp.auth.isGranted('Saas.Editions.Delete'),
                        confirmMessage: function (data) {
                            return l('EditionDeletionConfirmationMessage', data.record.displayName)
                        },
                        action: function (data) {
                            _editionAppService
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

    abp.ui.extensions.tableColumns.get("saas.edition").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l("Actions"),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("saas.edition").actions.toArray()
                        }
                    },
                    {
                        title: l("EditionName"),
                        data: "displayName"
                    }
                ]
            );
        },
        0 //adds as the first contributor
    );

    $(function () {

        var _$wrapper = $('#EditionsWrapper');

        var getFilter = function () {
            return {
                filter: _$wrapper.find("input.page-search-filter-text").val()
            };
        };
       
        _dataTable = _$wrapper.find('table').DataTable(abp.libs.datatables.normalizeConfiguration({
            order: [[1, "asc"]],
            searching:false,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(_editionAppService.getList,getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("saas.edition").columns.toArray()
        }));

        _createModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        _editModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        $('#AbpContentToolbar button[name=CreateEdition]').click(function (e) {
            e.preventDefault();
            _createModal.open();
        });

        _$wrapper.find("form.page-search-form").submit(function (e) {
            e.preventDefault();
            _dataTable.ajax.reload();
        });
    });

})();
