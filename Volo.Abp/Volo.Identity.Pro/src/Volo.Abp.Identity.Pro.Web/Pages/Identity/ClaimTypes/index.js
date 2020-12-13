(function ($) {

    var l = abp.localization.getResource('AbpIdentity');

    var _identityClaimTypeAppService = volo.abp.identity.identityClaimType;
    var _editModal = new abp.ModalManager(abp.appPath + 'Identity/ClaimTypes/EditModal');
    var _createModal = new abp.ModalManager(abp.appPath + 'Identity/ClaimTypes/CreateModal');

    var _dataTable = null;

    abp.ui.extensions.entityActions.get("identity.claimType").addContributor(
        function (actionList) {
            return actionList.addManyTail(
                [
                    {
                        text: l('Edit'),
                        visible: function (data) {
                            return abp.auth.isGranted('AbpIdentity.ClaimTypes.Update') && !data.isStatic;
                        },
                        action: function (data) {
                            _editModal.open({
                                id: data.record.id
                            });
                        }
                    },
                    {
                        text: l('Delete'),
                        visible: abp.auth.isGranted('AbpIdentity.ClaimTypes.Delete'),
                        confirmMessage: function (data) {
                            return l('ClaimTypeDeletionConfirmationMessage', data.record.name);
                        },
                        action: function (data) {
                            _identityClaimTypeAppService
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

    abp.ui.extensions.tableColumns.get("identity.claimType").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: l("Actions"),
                        rowAction: {
                            items: abp.ui.extensions.entityActions.get("identity.claimType").actions.toArray()
                        }
                    },
                    {
                        title: l("Name"),
                        data: "name"
                    },
                    {
                        title: l("ValueType"),
                        data: "valueTypeAsString",
                        orderable: false
                    },
                    {
                        title: l("Description"),
                        data: "description"
                    },
                    {
                        title: l("Regex"),
                        data: "regex"
                    },
                    {
                        title: l("Required"),
                        data: "required",
                        render: function (data) {
                            if (data) {
                                return '<i class="fa fa-check"></i>';
                            }
                            return '<i class="fa fa-times"></i>';
                        }
                    },
                    {
                        title: l("IsStatic"),
                        data: "isStatic",
                        render: function (data) {
                            if (data) {
                                return '<i class="fa fa-check"></i>';
                            }
                            return '<i class="fa fa-times"></i>';
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
                filter: $('#IdentityClaimTypesWrapper input.page-search-filter-text').val()
            };
        };

        _dataTable = $('#IdentityClaimTypesWrapper table').DataTable(abp.libs.datatables.normalizeConfiguration({
            order: [[1, "asc"]],
            processing: true,
            serverSide: true,
            searching: false,
            scrollX: true,
            paging: true,
            ajax: abp.libs.datatables.createAjax(_identityClaimTypeAppService.getList, getFilter),
            columnDefs: abp.ui.extensions.tableColumns.get("identity.claimType").columns.toArray()
        }));

        _createModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        _editModal.onResult(function () {
            _dataTable.ajax.reload(null, false);
        });

        $('#AbpContentToolbar button[name=CreateClaimType]').click(function (e) {
            e.preventDefault();
            _createModal.open();
        });

        $('#IdentityClaimTypesWrapper form.page-search-form').submit(function (e) {
            e.preventDefault();
            _dataTable.ajax.reload();
        });
    });

})(jQuery);
