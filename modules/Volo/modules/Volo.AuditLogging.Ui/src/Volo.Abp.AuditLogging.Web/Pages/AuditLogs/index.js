var _detailModal = new abp.ModalManager(abp.appPath + 'AuditLogs/Detail');
var _dataTable = null;

var _entityDetailModal = new abp.ModalManager(abp.appPath + 'AuditLogs/EntityChangeDetail');
var _entityChangeDataTable = null;

var l = abp.localization.getResource("AbpAuditLogging");

function getHttpStatusCodeBadgeClass(code) {
    if (code.toString().startsWith("2")) { return 'badge-success'; }
    else if (code.toString().startsWith("3")) { return 'badge-warning'; }
    else if (code.toString().startsWith("4") || code.toString().startsWith("5")) { return 'badge-danger'; }
    else { return 'badge-primary'; }
}

function getHttpMethodBadgeClass(code) {
    switch (code) {
    case 'GET': return 'badge-dark';
    case 'POST': return 'badge-success';
    case 'DELETE': return 'badge-danger';
    case 'PUT': return 'badge-warning';
    default: return '';
    }
}

abp.ui.extensions.entityActions.get('auditLogging.auditLog').addContributor(
    function (actionList) {
        return actionList.addManyTail(
            [
                {
                    text: l('Detail'),
                    icon: 'search',
                    action: function (data) {
                        _detailModal.open({
                            id: data.record.id
                        });
                    }
                }
            ]
        );
    }
);

abp.ui.extensions.tableColumns.get("auditLogging.auditLog").addContributor(
    function (columnList) {
        columnList.addManyTail(
            [
                {
                    title: l("Actions"),
                    rowAction:
                    {
                        items: abp.ui.extensions.entityActions.get("auditLogging.auditLog").actions.toArray()
                    }
                },
                {
                    title: l("HttpRequest"),
                    orderable: false,
                    autoWidth: false,
                    data: { httpStatusCode: "httpStatusCode", httpMethod: "httpMethod", url: "url" },
                    render: function (data, type, full) {
                        return '<span data-filter-field="HttpStatusCode" class="datatableCell badge ' + getHttpStatusCodeBadgeClass(data.httpStatusCode) + '">' + data.httpStatusCode + '</span>&nbsp; ' +
                            '<span data-filter-field="HttpMethod" class="datatableCell badge ' + getHttpMethodBadgeClass(data.httpMethod) + '">' + data.httpMethod + '</span> &nbsp;' +
                            '<span data-filter-field="UrlFilter" class="datatableCell">' + data.url + '</span>';
                    }
                },
                {
                    title: l("User"),
                    data: "userName",
                    render: function (data) {
                        data = data || "";
                        return '<span class="datatableCell" data-filter-field="UserName">' + data + '</span>';
                    }
                },
                {
                    title: l("IpAddress"),
                    data: "clientIpAddress"
                },
                {
                    title: l("Time"),
                    data: "executionTime",
                    dataFormat: "datetime"
                },
                {
                    title: l("DurationMs"),
                    data: "executionDuration"
                },
                {
                    title: l("ApplicationName"),
                    data: "applicationName",
                    render: function (data) {
                        if (data !== null) {
                            return '<span class="datatableCell" data-filter-field="ApplicationName">' + data + '</span>';
                        }
                        return "";
                    }
                },
                {
                    title: l("CorrelationId"),
                    data: "correlationId",
                    render: function (data) {

                        return '<span class="datatableCell" data-filter-field="CorrelationId">' + data + '</span>';
                    }
                }
            ]
        );
    },
    0 //adds as the first contributor
);

abp.ui.extensions.tableColumns.get("auditLogging.entityChange").addContributor(
    function (columnList) {
        columnList.addManyTail(
            [
                {
                    title: l("Actions"),
                    rowAction: {
                        items: [
                            {
                                text: l('ChangeDetails'),
                                icon: 'search',
                                action: function (data) {
                                    _entityDetailModal.open({
                                        auditLogId: data.record.auditLogId,
                                        entityChangeId: data.record.id
                                    });
                                }
                            },
                            {
                                text: l('FullChangeHistory'),
                                icon: 'history',
                                action: function (data) {
                                    abp.auditLogging.openEntityHistoryModal(
                                        data.record.entityTypeFullName,
                                        data.record.entityId
                                    );
                                }
                            }
                        ]
                    }
                },
                {
                    title: l("ChangeTime"),
                    orderable: true,
                    autoWidth: true,
                    data: "changeTime",
                    dataFormat: "datetime"
                },
                {
                    title: l("ChangeType"),
                    orderable: false,
                    autoWidth: true,
                    data: "changeType",
                    render: function (data) {
                        if (data == 0) {
                            return "Created";
                        } else if (data == 1) {
                            return "Updated";
                        } else if (data == 2) {
                            return "Deleted";
                        } else {
                            return "";
                        }
                    }
                },
                {
                    title: l("TenantId"),
                    orderable: false,
                    autoWidth: true,
                    data: "tenantId",
                    render: function (data) {
                        return data || "null";
                    }
                },
                {
                    title: l("EntityTypeFullName"),
                    orderable: false,
                    autoWidth: true,
                    data: "entityTypeFullName"
                }
            ]
        );
    },
    0 //adds as the first contributor
);

$(function () {

    $('input.datepicker').datepicker({
        todayBtn: "linked",
        autoclose: true,
        language: abp.localization.currentCulture.cultureName
    }).on('hide', function (e) { e.stopPropagation(); });

    _dataTable = $('#AuditLogsTable').DataTable(abp.libs.datatables.normalizeConfiguration({
        processing: true,
        serverSide: true,
        paging: true,
        scrollX: true,
        searching: false, 
        scrollCollapse: true,
        order: [[4, "desc"]],
        ajax: abp.libs.datatables.createAjax(volo.abp.auditLogging.auditLogs.getList,
            function () {
                var form = $("#FilterFormId").serializeFormToObject();
                form.url = form.urlFilter;
                return form;
            }
        ),
        columnDefs: abp.ui.extensions.tableColumns.get("auditLogging.auditLog").columns.toArray()
    }));

    _entityChangeDataTable = $('#EntityChangesTable').DataTable(abp.libs.datatables.normalizeConfiguration(
        {
            deferLoading: true,
            processing: true,
            serverSide: true,
            paging: true,
            scrollX: false,
            searching: false,
            autoWidth: true,
            scrollCollapse: true,
            order: [[1, "desc"]],
            ajax: abp.libs.datatables.createAjax(volo.abp.auditLogging.auditLogs.getEntityChanges,
                function() {
                    var form = $('#EntityChangesFilterFormId').serializeFormToObject();

                    var startDate = luxon.DateTime.fromFormat(
                        form.startDate,
                        abp.localization.currentCulture.dateTimeFormat.shortDatePattern,
                        { locale: abp.localization.currentCulture.cultureName }
                    );
                    if (!startDate.invalid) {
                        form.startDate = startDate.toFormat("yyyy-MM-dd");
                    }

                    var endDate = luxon.DateTime.fromFormat(
                        form.endDate,
                        abp.localization.currentCulture.dateTimeFormat.shortDatePattern,
                        { locale: abp.localization.currentCulture.cultureName }
                    );
                    if (!endDate.invalid) {
                        form.endDate = endDate.toFormat("yyyy-MM-dd");
                    }
                    
                    return form;
                }
            ),
            columnDefs: abp.ui.extensions.tableColumns.get("auditLogging.entityChange").columns.toArray()
        }));

    var entityChangeTableFetched = false;
    $('a[data-toggle="tab"]').on('shown.bs.tab',
        function () {
            if (!entityChangeTableFetched && $('#EntityChanges-tab').hasClass('active')) {
                entityChangeTableFetched = true;
                _entityChangeDataTable.ajax.reload(null, false);
            }
        });

    $("#FilterFormId").submit(function (e) {
        e.preventDefault();
        _dataTable.ajax.reload(null, false);
    });

    $("#EntityChangesFilterFormId").submit(function (e) {
        e.preventDefault();
        _entityChangeDataTable.ajax.reload(null, false);
    });

    $(document).on('click', '.datatableCell', function () {
        $("#" + $(this).attr('data-filter-field')).val($(this).text());
        $("#FilterFormId").submit();
    });

    $('#HttpStatusCode').change(function () {
        $("#FilterFormId").submit();
    });

    $('#HttpMethod').change(function () {
        $("#FilterFormId").submit();
    });

    $('#FilterFormId').keypress(function (e) {
        if (e.which == 13) {
            $('#FilterFormId').submit();
        }
    });

    $('#EntityChangesFilterFormId').keypress(function (e) {
        if (e.which == 13) {
            $('#EntityChangesFilterFormId').submit();
        }
    });

});
