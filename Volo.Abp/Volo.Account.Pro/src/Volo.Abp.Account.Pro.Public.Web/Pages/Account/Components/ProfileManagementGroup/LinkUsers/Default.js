(function ($) {
    $(function () {
        var l = abp.localization.getResource("AbpAccount");

        var _identityLinkUser = volo.abp.identity.identityLinkUser;

        abp.ui.extensions.entityActions
            .get("account.linkUsers")
            .addContributor(function (actionList) {
                return actionList.addManyTail([
                    {
                        text: l("LoginAsThisUser"),
                        action: function (data) {
                            $("#linkUserLoginForm input[name='LinkUserId']").val(
                                data.record.targetUserId
                            );
                            if (data.record.targetTenantId) {
                                $("#linkUserLoginForm input[name='LinkTenantId']").val(
                                    data.record.targetTenantId
                                );
                            }
                            $("#linkUserLoginForm").submit();
                        },
                    },
                    {
                        text: l("Delete"),
                        confirmMessage: function (data) {
                            return l(
                                'DeleteLinkUserConfirmationMessage',
                                data.record.targetTenantName ?
                                    data.record.targetTenantName + "\\" + data.record.targetUserName :
                                    data.record.targetUserName
                            );
                        },
                        action: function (data) {
                            _identityLinkUser
                                .unlink({
                                    UserId: data.record.targetUserId,
                                    TenantId: data.record.targetTenantId,
                                })
                                .then(function () {
                                    _dataTable.ajax.reload(null, false);
                                });
                        },
                    },
                ]);
            });

        abp.ui.extensions.tableColumns.get("account.linkUsers").addContributor(
            function (columnList) {
                columnList.addManyTail([
                    {
                        title: l("Actions"),
                        rowAction: {
                            items: abp.ui.extensions.entityActions
                                .get("account.linkUsers")
                                .actions.toArray(),
                        },
                    },
                    {
                        title: l("TenantAndUserName"),
                        render: function (data, type, row) {
                            if (row.targetTenantName) {
                                return row.targetTenantName + "\\" + row.targetUserName;
                            } else {
                                return row.targetUserName;
                            }
                        },
                        orderable: false
                    },
                ]);
            },
            0 //adds as the first contributor
        );

        _dataTable = $("#MyLinkUsersTable").DataTable(
            abp.libs.datatables.normalizeConfiguration({
                processing: true,
                serverSide: true,
                paging: false,
                scrollX: true,
                searching: false,
                autoWidth: true,
                scrollCollapse: false,
                order: [],
                bInfo: false,
                ajax: abp.libs.datatables.createAjax(_identityLinkUser.getAllList),
                columnDefs: abp.ui.extensions.tableColumns
                    .get("account.linkUsers")
                    .columns.toArray(),
            })
        );

        $('#Volo-Abp-Account-LinkUsers-tab').on('shown.bs.tab', function (e) {
            _dataTable.columns.adjust();
        })

        $("#CreateLinkUser").click(function () {
            abp.message.confirm(l("NewLinkUserWarning"), l("AreYouSure"), function (result) {
                if(result) {
                    _identityLinkUser.generateLinkToken().then(function (token) {
                        var url =
                            abp.appPath +
                            "Account/Login?handler=CreateLinkUser&" +
                            "LinkUserId=" +
                            abp.currentUser.id +
                            "&LinkToken=" +
                            token;
                        if (abp.currentTenant.id) {
                            url += "&LinkTenantId=" + abp.currentTenant.id;
                        }
                        location.href = url;
                    });
                }
            });
        });

    });
})(jQuery);

