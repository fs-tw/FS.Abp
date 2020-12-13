(function ($) {

    var l = abp.localization.getResource('AbpIdentity');
    var _identityRoleAppService = volo.abp.identity.identityRole;
    var _permissionsModal = new abp.ModalManager(abp.appPath + 'AbpPermissionManagement/PermissionManagementModal');
    var _claimTypeEditModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'Identity/Roles/ClaimTypeEditModal',
        modalClass: 'claimTypeEdit'
    });
    var _editModal = new abp.ModalManager(abp.appPath + 'Identity/Roles/EditModal');
    var _createModal = new abp.ModalManager(abp.appPath + 'Identity/Roles/CreateModal');

    var _dataTable = null;

    abp.ui.extensions.entityActions.get("identity.role").addContributor(
        function (actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l('Edit'),
                        visible: abp.auth.isGranted('AbpIdentity.Roles.Update'),
                        action: function (data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('Claims'),
                        visible: abp.auth.isGranted('AbpIdentity.Roles.Update'),
                        action: function (data) {
                            _claimTypeEditModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('Permissions'),
                        visible: abp.auth.isGranted('AbpIdentity.Roles.ManagePermissions'),
                        action: function (data) {
                            _permissionsModal.open({
                                providerName: 'R',
                                providerKey: data.record.name
                            });
                        }
                    },
                    {
                        text: l('ChangeHistory'),
                        visible: abp.auditLogging && abp.auth.isGranted('AuditLogging.ViewChangeHistory:Volo.Abp.Identity.IdentityRole'),
                        action: function (data) {
                            abp.auditLogging.openEntityHistoryModal(
                                "Volo.Abp.Identity.IdentityRole",
                                data.record.id
                            );
                        }
                    },
                    {
                        text: l('Delete'),
                        visible: abp.auth.isGranted('AbpIdentity.Roles.Delete'),
                        confirmMessage: function (data) {
                            return l('RoleDeletionConfirmationMessage', data.record.name);
                        },
                        action: function (data) {
                            _identityRoleAppService
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

    abp.ui.extensions.tableColumns.get("identity.role").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l('Actions'),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("identity.role").actions.toArray()
                        }
                    },
                    {
                        title: l('RoleName'),
                        data: "name",
                        render: function (data, type, row) {
                            var name = '<span>' + data + '</span>';
                            if (row.isDefault) {
                                name += '<span class="badge badge-pill badge-success ml-1">' + l('DisplayName:IsDefault') + '</span>';
                            }
                            if (row.isPublic) {
                                name += '<span class="badge badge-pill badge-info ml-1">' + l('DisplayName:IsPublic') + '</span>';
                            }
                            return name;
                        }
                    }
                ]
            );
        },
        0 //adds as the first contributor
    );

    $(function () {

        var getFilter = function () {
            return {
                filter: $('#IdentityRolesWrapper input.page-search-filter-text').val()
            };
        };

        _dataTable = $('#IdentityRolesWrapper table')
            .DataTable(abp.libs.datatables.normalizeConfiguration({
                order: [[1, "asc"]],
                searching: false,
                processing: true,
                scrollX: true,
                serverSide: true,
                paging: true,
                ajax: abp.libs.datatables.createAjax(_identityRoleAppService.getList, getFilter),
                columnDefs: abp.ui.extensions.tableColumns.get("identity.role").columns.toArray()
            }));

        _createModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        _editModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        $('#AbpContentToolbar button[name=CreateRole]').click(function (e) {
            e.preventDefault();
            _createModal.open();
        });

        $('#IdentityRolesWrapper form.page-search-form').submit(function (e) {
            e.preventDefault();
            _dataTable.ajax.reload();
        });
    });

})(jQuery);
