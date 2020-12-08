var abp = abp || {};
$(function () {
    abp.modals.apiResourceCreate = function () {
        var initModal = function (publicApi, args) {
            var $form = publicApi.getForm();

            $(".otherClaim").on('click', function (event) {
                event.preventDefault();

                var otherId = $(this).attr("id");
                var name = otherId.substring(0, otherId.length - "OtherId".length);
                var inputId = name + "InputId";
                var ownedId = name + "OwnedId";


                $("#" + ownedId).show();
                $("#" + otherId).hide();
                $("#" + inputId).val(name);
            });

            $(".ownedClaim").on('click', function (event) {
                event.preventDefault();

                var ownedId = $(this).attr("id");
                var name = ownedId.substring(0, ownedId.length - "OwnedId".length);
                var inputId = name + "InputId";
                var otherId = name + "OtherId";

                $("#" + otherId).show();
                $("#" + ownedId).hide();
                $("#" + inputId).val("");
            });

            $(".ownedClaim").hide();
        };

        return {
            initModal: initModal
        }
    };
});