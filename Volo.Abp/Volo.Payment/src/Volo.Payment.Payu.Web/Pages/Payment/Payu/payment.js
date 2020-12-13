var abp = abp || {};
$(function () {
    var $emailInput = $("#payu-email-address");
    var $nameInput = $("#payu-first-name");
    var $lastNameInput = $("#payu-last-name");
    var $continueBtn = $(".vst-btn-continuetocheckout");

    var emailRegexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var nameRegexPattern = /^[a-zA-Z0-9ığüşöçİĞÜŞÖÇ]+$/;

    var validateField = function (regexPattern, input) {
        return regexPattern.test(input.toLowerCase());
    }

    var updateButton = function () {
        if (!validateField(emailRegexPattern, $emailInput.val()) ||
            !validateField(nameRegexPattern, $nameInput.val()) ||
            !validateField(nameRegexPattern, $lastNameInput.val())) {

            $continueBtn.prop("disabled", true);
        } else {
            $continueBtn.prop("disabled", false);
        }
    };

    var validation = function (pattern, input, errorInput) {
        if (validateField(pattern, input)) {
            errorInput.css("display", "none");
            updateButton();

        } else {
            errorInput.css("display", "block");
            $continueBtn.prop("disabled", true);
        }
    }

    updateButton();

    $emailInput.keyup(function () {
        validation(emailRegexPattern, $emailInput.val(), $("#EmailAddress-error"));
    });

    $nameInput.keyup(function () {
        validation(nameRegexPattern, $nameInput.val(), $("#name-error"));
    });

    $lastNameInput.keyup(function () {
        validation(nameRegexPattern, $lastNameInput.val(), $("#lastName-error"));
    });

    $continueBtn.click(function (e) {
        if (!validateField(emailRegexPattern, $emailInput.val()) ||
            !validateField(nameRegexPattern, $nameInput.val()) ||
            !validateField(nameRegexPattern, $lastNameInput.val())) {

            e.preventDefault();
        }
        else {
            $("form[name=payu-form]").submit();
        }
    });

});