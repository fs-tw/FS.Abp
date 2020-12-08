(function () {

    var getRandomBackgroundColor = function (count) {
        var colors = [];

        for (var i = 0; i < count; i++) {
            var r = ((i + 5) * (i + 5) * 474) % 255;
            var g = ((i + 5) * (i + 5) * 1600) % 255;
            var b = ((i + 5) * (i + 5) * 84065) % 255;
            colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
        }

        return colors;
    };

    abp.widgets.SaasEditionPercentageWidget = function ($wrapper) {

        var _chart;

        var refresh = function () {
            volo.saas.host.edition.getUsageStatistics({})
                .then(function (statistic) {
                    _chart.data = {
                        labels: Object.keys(statistic.data),
                        datasets: [
                            {
                                data: Object.values(statistic.data),
                                backgroundColor: getRandomBackgroundColor(Object.values(statistic.data).length)
                            }
                        ]
                    };

                    _chart.update();
                });
        };

        var init = function () {
            _chart = new Chart($wrapper.find('.SaasEditionPercentageWidgetChart'),
                {
                    type: 'pie'
                });

            refresh();
        };

        return {
            init: init,
            refresh: refresh
        };
    };
})();