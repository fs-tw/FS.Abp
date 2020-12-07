(function ($) {

    $(function () {
        var l = abp.localization.getResource("AbpAccount");

        var _profileService = volo.abp.identity.profile;
        var _accountService = volo.abp.account.account;

        var _confirmPhoneNumberModal = new abp.ModalManager(
            abp.appPath + "Account/Components/ProfileManagementGroup/PersonalInfo/ConfirmPhoneNumberModal"
        );

        var $email = $('#PersonalSettingsForm').find("#Email");
        var $verifyEmail = $("#VerifyEmailButton");
        var $emailVerified = $("#EmailVerified");
        var $emailNotVerified = $("#EmailNotVerified");

        var $phone = $('#PersonalSettingsForm').find("#PhoneNumber");
        var $verifyPhone = $("#VerifyPhoneButton");
        var $phoneVerified = $("#PhoneVerified");
        var $phoneNotVerified = $("#PhoneNotVerified");


        $('#PersonalSettingsForm').find("#Email").keyup(function () {
            if ($(this).val() !== $(this).attr("data-saved-email")) {
                $("#VerifyEmailButton").hide();
                $("#EmailVerified").hide();
                $("#EmailNotVerified").show();
            } else if ($(this).attr("data-email-verified") === "False") {
                $("#VerifyEmailButton").show();
                $("#EmailNotVerified").hide();
            } else if ($(this).attr("data-email-verified") === "True") {
                $("#EmailVerified").show();
                $("#EmailNotVerified").hide();
            }
        });

        $('#PersonalSettingsForm').find("#PhoneNumber").keyup(function () {
            if ($(this).val() !== $(this).attr("data-saved-phone")) {
                $("#VerifyPhoneButton").hide();
                $("#PhoneVerified").hide();

                if ($(this).val() !== "") {
                    $("#PhoneNotVerified").show();
                } else {
                    $("#PhoneNotVerified").hide();
                }
            } else if ($(this).attr("data-phone-verified") === "False") {
                if ($(this).val() !== "") {
                    $("#VerifyPhoneButton").show();
                }
                $("#PhoneNotVerified").hide();
            } else if ($(this).attr("data-phone-verified") === "True") {
                if ($(this).val() !== "") {
                    $("#PhoneVerified").show();
                }
                $("#PhoneNotVerified").hide();
            }
        });

        $("#VerifyEmailButton").on("click", "", function () {
            _accountService
                .sendEmailConfirmationToken({
                    email: $('#PersonalSettingsForm').find("#Email").val(),
                    appName: "MVC",
                    returnUrl: "/",
                    returnUrlHash: "",
                })
                .then(function () {
                    abp.message.success(
                        l(
                            "EmailConfirmationSentMessage",
                            $('#PersonalSettingsForm').find("#Email").val()
                        )
                    );
                    $("#VerifyEmailButton").hide();
                });
        });

        $("#VerifyPhoneButton").on("click", "", function () {
            _confirmPhoneNumberModal.open();
        });

        var askForVerify = function () {
            abp.message.confirm(
                " ",
                l("DoYouWantToVerifyPhoneNumberMessage"),
                function (isConfirmed) {
                    if (isConfirmed) {
                        $("#VerifyPhoneButton").click();
                    }
                }
            );
        };

        $("#PersonalSettingsForm").submit(function (e) {
            e.preventDefault();

            if (!$("#PersonalSettingsForm").valid()) {
                return false;
            }

            var input = $("#PersonalSettingsForm").serializeFormToObject();

            _profileService.update(input).then(function (result) {
                abp.notify.success(l("PersonalSettingsSaved"));

                if (input.email !== $email.attr("data-saved-email")) {
                    $verifyEmail.show();
                    $emailVerified.hide();
                    $email.attr("data-email-verified", "False");
                }

                $email.attr("data-saved-email", $email.val());
                $emailNotVerified.hide();

                if (!input.phoneNumber || input.phoneNumber === "") {
                    $verifyPhone.hide();
                    $phoneVerified.hide();
                    $phoneNotVerified.hide();
                    $phone.attr("data-saved-phone", input.phoneNumber);
                    return;
                }

                if (
                    $phone.attr("data-saved-phone") === input.phoneNumber ||
                    $verifyPhone.length < 1
                ) {
                    return;
                }

                $verifyPhone.show();
                $phoneVerified.hide();
                $phoneNotVerified.hide();
                $phone.attr("data-saved-phone", input.phoneNumber);
                $phone.attr("data-phone-verified", "False");

                askForVerify();
            });
        });

        _confirmPhoneNumberModal.onResult(function () {
            $verifyPhone.hide();
            $phoneNotVerified.hide();
            $phoneVerified.show();
            $phone.attr("data-phone-verified", "True");
        });
    });
})(jQuery);
