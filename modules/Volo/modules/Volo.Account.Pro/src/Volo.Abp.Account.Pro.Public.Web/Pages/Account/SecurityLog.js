var _dataTable = null;

var l = abp.localization.getResource("AbpAccount");

var _identitySecurityLog = volo.abp.identity.identitySecurityLog;

abp.ui.extensions.tableColumns.get("account.mySecurityLogs").addContributor(
  function (columnList) {
    columnList.addManyTail([
      {
        title: l("MySecurityLogs:Time"),
        data: "creationTime",
        dataFormat: "datetime",
      },
      {
        title: l("MySecurityLogs:Action"),
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
        title: l("MySecurityLogs:IpAddress"),
        data: "clientIpAddress",
        autoWidth: true,
        orderable: false,
      },
      {
        title: l("MySecurityLogs:Browser"),
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
        title: l("MySecurityLogs:Application"),
        data: "applicationName",
        autoWidth: true,
        render: function (data) {
          return data || "";
        },
      },
      {
        title: l("MySecurityLogs:Identity"),
        data: "identity",
        autoWidth: true,
        render: function (data) {
          return data || "";
        },
      },
      {
        title: l("MySecurityLogs:Client"),
        data: "clientId",
        autoWidth: true,
        render: function (data) {
          return data || "";
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

  _dataTable = $("#MySecurityLogsTable").DataTable(
    abp.libs.datatables.normalizeConfiguration({
      processing: true,
      serverSide: true,
      paging: true,
      scrollX: true,
      searching: false,
      autoWidth: false,
      scrollCollapse: true,
      order: [[0, "desc"]],
      ajax: abp.libs.datatables.createAjax(
        _identitySecurityLog.getMyList,
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
        .get("account.mySecurityLogs")
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
