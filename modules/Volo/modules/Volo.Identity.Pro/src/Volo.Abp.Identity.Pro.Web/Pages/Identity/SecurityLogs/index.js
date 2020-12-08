var _dataTable = null;

var l = abp.localization.getResource("AbpIdentity");

var _identitySecurityLog = volo.abp.identity.identitySecurityLog;

abp.ui.extensions.tableColumns.get("identity.securityLogs").addContributor(
  function (columnList) {
    columnList.addManyTail([
      {
        title: l("SecurityLogs:Time"),
        data: "creationTime",
        dataFormat: "datetime",
      },
      {
        title: l("SecurityLogs:Action"),
        data: "action",
        autoWidth: true,
        render: function (data) {
          data = data || "";
          return (
            '<span class="datatableCell" data-filter-field="Action">' +
            data +
            "</span>"
          );
        },
      },
      {
        title: l("SecurityLogs:IpAddress"),
        data: "clientIpAddress",
        autoWidth: true,
        orderable: false,
      },
      {
        title: l("SecurityLogs:Browser"),
        data: "browserInfo",
        autoWidth: true,
        orderable: false,
        render: function (data) {
          data = data || "";

          var maxChars = 20;

          if (data.length > maxChars) {
            return (
              '<span data-toggle="tooltip" title="' +
              data +
              '">' +
              data.substring(0, maxChars) +
              "..." +
              "</span>"
            );
          } else {
            return data;
          }
        },
      },
      {
        title: l("SecurityLogs:Application"),
        data: "applicationName",
        autoWidth: true,
        render: function (data) {
          data = data || "";
          return (
            '<span class="datatableCell" data-filter-field="ApplicationName">' +
            data +
            "</span>"
          );
        },
      },
      {
        title: l("SecurityLogs:Identity"),
        data: "identity",
        autoWidth: true,
        render: function (data) {
          data = data || "";
          return (
            '<span class="datatableCell" data-filter-field="Identity">' +
            data +
            "</span>"
          );
        },
      },
      {
        title: l("SecurityLogs:UserName"),
        data: "userName",
        autoWidth: true,
        render: function (data) {
          data = data || "";
          return (
            '<span class="datatableCell" data-filter-field="UserName">' +
            data +
            "</span>"
          );
        },
      },
      {
        title: l("SecurityLogs:Client"),
        data: "clientId",
        autoWidth: true,
        render: function (data) {
          data = data || "";
          return (
            '<span class="datatableCell" data-filter-field="ClientId">' +
            data +
            "</span>"
          );
        },
      },
      {
        title: l("SecurityLogs:CorrelationId"),
        data: "correlationId",
        autoWidth: true,
        orderable: false,
        render: function (data) {
          data = data || "";
          return (
            '<span class="datatableCell" data-filter-field="CorrelationId">' +
            data +
            "</span>"
          );
        },
      },
    ]);
  },
  0 //adds as the first contributor
);

$(function () {
  $(".input-daterange")
    .datepicker({
      todayBtn: "linked",
      autoclose: true,
      language: abp.localization.currentCulture.cultureName,
    })
    .on("hide", function (e) {
      e.stopPropagation();
    });

  _dataTable = $("#IdentitySecurityLogsTable").DataTable(
    abp.libs.datatables.normalizeConfiguration({
      processing: true,
      serverSide: true,
      paging: true,
      scrollX: true,
      searching: false, 
      scrollCollapse: true,
      order: [[0, "desc"]],
      ajax: abp.libs.datatables.createAjax(
        _identitySecurityLog.getList,
        function () {
          var form = $("#FilterFormId").serializeFormToObject();
          
          var startTime = luxon.DateTime.fromFormat(
              form.startTime,
              abp.localization.currentCulture.dateTimeFormat.shortDatePattern,
              { locale: abp.localization.currentCulture.cultureName }
          );
          if (!startTime.invalid) {
            form.startTime = startTime.toFormat("yyyy-MM-dd");
          }
          
          var endTime = luxon.DateTime.fromFormat(
              form.endTime,
              abp.localization.currentCulture.dateTimeFormat.shortDatePattern,
              { locale: abp.localization.currentCulture.cultureName }
          );
          if (!endTime.invalid) {
            form.endTime = endTime.toFormat("yyyy-MM-dd");
          }

          return form;
        }
      ),
      columnDefs: abp.ui.extensions.tableColumns
        .get("identity.securityLogs")
        .columns.toArray(),
    })
  );

  $(document).on("click", ".datatableCell", function () {
    $("#" + $(this).attr("data-filter-field")).val($(this).text());
    $("#FilterFormId").submit();
  });

  $("#FilterFormId").submit(function (e) {
    e.preventDefault();
    _dataTable.ajax.reload(null, false);
  });
});
