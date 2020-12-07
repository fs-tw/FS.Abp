(function ($) {
  $(function () {
    var l = abp.localization.getResource("AbpAccount");
    var _profileService = volo.abp.identity.profile;

    $("#PersonalTwoFactorForm").submit(function (e) {
      e.preventDefault();
      _profileService
        .setTwoFactorEnabled(
          $("#PersonalTwoFactorForm").serializeFormToObject().twoFactorEnabled
        )
        .then(function (result) {
          abp.message.success(l("TwoFactorChanged"));
        });
    });
  });
})(jQuery);
