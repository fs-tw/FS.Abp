(function ($) {

    var l = abp.localization.getResource('AbpIdentity');

    var _identityUserAppService = volo.abp.identity.identityUser;
    var _claimTypeEditModal = new abp.ModalManager({ viewUrl: abp.appPath + 'Identity/Users/ClaimTypeEditModal', modalClass: 'claimTypeEdit' });
    var _editModal = new abp.ModalManager({ viewUrl: abp.appPath + 'Identity/Users/EditModal', modalClass: 'editUser' });
    var _createModal = new abp.ModalManager({ viewUrl: abp.appPath + 'Identity/Users/CreateModal', modalClass: 'createUser' });
    var _permissionsModal = new abp.ModalManager(abp.appPath + 'AbpPermissionManagement/PermissionManagementModal');
    var _changeUserPasswordModal = new abp.ModalManager({ viewUrl: abp.appPath + 'Identity/Users/SetPassword', modalClass: 'changeUserPassword' });
    var _lockoutModal = new abp.ModalManager({ viewUrl: abp.appPath + 'Identity/Users/Lock', modalClass: 'lock' });
    var _twoFactorModal = new abp.ModalManager({ viewUrl: abp.appPath + 'Identity/Users/TwoFactor', modalClass: 'twoFactor' });

    var _dataTable = null;

    abp.ui.extensions.entityActions.get("identity.user").addContributor(
        function(actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l('Edit'),
                        visible: abp.auth.isGranted('AbpIdentity.Users.Update'),
                        action: function(data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('Claims'),
                        visible: abp.auth.isGranted('AbpIdentity.Users.Update'),
                        action: function(data) {
                            _claimTypeEditModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('Lock'),
                        visible: abp.auth.isGranted('AbpIdentity.Users.Update'),
                        action: function(data) {
                            _lockoutModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('Unlock'),
                        visible: function(data) {
                            return data.isLockedOut &&
                                abp.auth.isGranted('AbpIdentity.Users.Update'); //TODO: New permission for lockout?
                        },
                        action: function(data) {
                            _identityUserAppService
                                .unlock(data.record.id)
                                .then(function() {
                                    abp.notify.success(l("UserUnlocked"));
                                    _dataTable.ajax.reload(null, false);
                                });
                        }
                    },
                    {
                        text: l('Permissions'),
                        visible: abp.auth.isGranted('AbpIdentity.Users.ManagePermissions'),
                        action: function(data) {
                            _permissionsModal.open({
                                providerName: 'U',
                                providerKey: data.record.id
                            });
                        }
                    },
                    {
                        text: l('SetPassword'),
                        visible: abp.auth.isGranted('AbpIdentity.Users.Update'),
                        action: function(data) {
                            _changeUserPasswordModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('TwoFactor'),
                        visible: function(data){
                            return abp.auth.isGranted('AbpIdentity.Users.Update') && data.supportTwoFactor;
                        },
                        action: function(data) {
                            _twoFactorModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('ChangeHistory'),
                        visible: abp.auditLogging && abp.auth.isGranted('AuditLogging.ViewChangeHistory:Volo.Abp.Identity.IdentityUser'),
                        action: function (data) {
                            abp.auditLogging.openEntityHistoryModal(
                                "Volo.Abp.Identity.IdentityUser",
                                data.record.id
                            );
                        }
                    },
                    {
                        text: l('Delete'),
                        visible: abp.auth.isGranted('AbpIdentity.Users.Delete'),
                        confirmMessage: function(data) {
                            return l('UserDeletionConfirmationMessage', data.record.userName);
                        },
                        action: function(data) {
                            _identityUserAppService
                                .delete(data.record.id)
                                .then(function() {
                                    _dataTable.ajax.reload(null, false);
                                });
                        }
                    }
                ]
            );
        }
    );

    abp.ui.extensions.tableColumns.get("identity.user").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l('Actions'),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("identity.user").actions.toArray()
                        }
                    },
                    {
                        title: l('UserName'),
                        autoWidth: false,
                        data: 'userName',
                        render: function (data, type, row) {
                            if (row.isLockedOut) {
                                return '<i data-toggle="tooltip" data-placement="top" title="' +
                                    l('ThisUserIsLockedOutMessage') +
                                    '" class="fa fa-lock text-danger"></i> ' +
                                    '<span class="opc-65">' +
                                    row.userName +
                                    '</span>';
                            }
                            return row.userName;
                        }
                    },
                    {
                        title: l('EmailAddress'),
                        data: "email",
                        render: function (data, type, row) {
                            if (!row.emailConfirmed) {
                                return data;
                            }

                            return data + ' <i class="text-success ml-1 fa fa-check" data-toggle="tooltip" data-placement="top" title="' + l('Verified') + '"></i>';
                        }
                    },
                    {
                        title: l('PhoneNumber'),
                        data: "phoneNumber",
                        render: function (data, type, row) {
                            if (!row.phoneNumberConfirmed) {
                                return data;
                            }

                            return data + ' <i class="text-success ml-1 fa fa-check" data-toggle="tooltip" data-placement="top" title="' + l('Verified') + '"></i>';
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
                filter: $('#IdentityUsersWrapper input.page-search-filter-text').val()
            };
        };

        _dataTable = $('#IdentityUsersWrapper table').DataTable(abp.libs.datatables.normalizeConfiguration({
            order: [[2, "asc"]],
            processing: true,
            serverSide: true,
            searching:false,
            scrollX: true,
            paging: true,
            ajax: abp.libs.datatables.createAjax(_identityUserAppService.getList,getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("identity.user").columns.toArray()
        }));

        _createModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        _editModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        $('#AbpContentToolbar button[name=CreateUser]').click(function (e) {
            e.preventDefault();
            _createModal.open();
        });

        $('#IdentityUsersWrapper form.page-search-form').submit(function (e) {
            e.preventDefault();
            _dataTable.ajax.reload();
        });
    });

})(jQuery);
