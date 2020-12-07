var abp = abp || {};
$(function () {

    var $continueBtn = $("#btnSubmit");

    $continueBtn.click(function (e) {
        e.preventDefault();

        var selectedGateways = $("input[type='radio']:checked");
        if (selectedGateways && selectedGateways.length === 1) {
            var selectedGateway = selectedGateways[0].value;
            var $form = $("#frmGatewaySelection");
            var $prePaymentUrl = $('#' + selectedGateway + 'PrePaymentUrl').val();
            $form.attr('action', $prePaymentUrl);
            $form.submit();
            return;
        }

        abp.notify.warn("Please select a Gateway to continue !");
    });

});