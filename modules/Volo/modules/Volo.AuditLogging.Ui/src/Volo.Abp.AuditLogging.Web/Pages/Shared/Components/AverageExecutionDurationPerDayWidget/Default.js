(function () {

    var l = abp.localization.getResource('AbpAuditLogging');

    abp.widgets.AuditLoggingAverageExecutionDurationPerDayWidget = function ($wrapper) {

        var _chart;

        var refresh = function (filters) {
            volo.abp.auditLogging.auditLogs.getAverageExecutionDurationPerDay({
                startDate: filters.startDate,
                endDate: filters.endDate
            })
                .then(function (statistic) {
                    _chart.data = {
                        labels: Object.keys(statistic.data),
                        datasets: [
                            {
                                label: l("AverageExecutionDurationInMilliseconds"),
                                data: Object.values(statistic.data),
                                backgroundColor: 'rgba(250, 50, 50, 0.7)'

                            }
                        ]
                    };
                    _chart.update();
                });
        };


        var init = function (filters) {
            _chart = new Chart($wrapper.find('.AverageExecutionDurationPerDayChart'),
                {
                    type: 'bar',
                    options: {
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                    }
                });

            refresh(filters);
        };

        return {
            init: init,
            refresh: refresh
        };
    };
})();