(function ($) {

    var l = abp.localization.getResource('AbpIdentity');
    var _organizationoUntAppService =  volo.abp.identity.organizationUnit;


    var _modal = null;
    var _dataTable = null;

    abp.ui.extensions.tableColumns.get("organization.unit.members").addContributor(
        function (columnList) {
            columnList.addManyTail(
                [
                    {
                        title: ou.checkbox.getSelectAllHeaderTitle(),
                        targets: 0,
                        data: null,
                        orderable: false,
                        autoWidth: false,
                        defaultContent: '',
                        className: 'text-center',
                        render: function (data) {
                            return '<div class="custom-checkbox custom-control no-height">' +
                                `<input type="checkbox" id="${data.id}" name="select-member-cb" class="custom-control-input">` +
                                `<label class="custom-control-label" for="${data.id}"></label>` +
                                '</div >';
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
                        data: "email"
                    }
                ]
            );
        }
    );

    abp.modals.AddMemberModalManagement = function () {

        var initModal = function (publicApi, args) {
            _modal = publicApi;

            _dataTable = $('#IdentityUsersModalWrapper table')
                .DataTable(abp.libs.datatables.normalizeConfiguration({
                    order: [[2, "asc"]],
                    processing: true,
                    serverSide: true,
                    paging: true,
                    ajax: abp.libs.datatables.createAjax(_organizationoUntAppService.getAvailableUsers, () => {
                        return {
                            id: args.organizationUnitId
                        }
                    }),
                    "initComplete": function (settings, json) {
                        // _dataTable.columns().draw();
                        setTimeout(function () {
                            _dataTable.columns().draw();
                        }, 250);
                    },
                    columnDefs: abp.ui.extensions.tableColumns.get("organization.unit.members").columns.toArray(),
                    "fnRowCallback": function (nRow, aData) {
                        let $cb = $(nRow).find('input');
                        if (ou.checkbox.getSelectedIds().includes(aData.id)) {
                            $cb.prop("checked", true);
                        }
                        $(nRow).addClass('selectable');
                    }
                }));

            ou.checkbox.initialize("select-member-cb");
        };

        return {
            initModal: initModal
        };
    };

    $(document).on('click', '#AddMembersToOuButton', function () {
        ou.members.add(ou.checkbox.getSelectedIds());
        _modal.close();
    });

})(jQuery);
