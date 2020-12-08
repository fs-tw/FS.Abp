var abp = abp || {};
$(function () {
    abp.modals.identityResourceUpdate = function () {
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


            //Properties

            var propertyIndex = $('#PropertyStartIndex').val();
            var propertyCount = $('#PropertyStartIndex').val();

            var getPropertyTableRow = function (key, value) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + key + " </td><td>\r\n" +
                    "                                        " + value + "\r\n </td> <td>" +
                    "                                       <input type=\"text\" hidden name=\"IdentityResource.Properties[" + propertyIndex + "].Key\"/ value=\"" + key + "\" id=\"" + key + "PropertyInput\">\r\n " +
                    "                                       <input type=\"text\" hidden name=\"IdentityResource.Properties[" + propertyIndex + "].Value\" value=\"" + value + "\"/>\r\n " +
                    "                                       <button type=\"button\" class=\"btn btn-outline-danger float-right deletePropertyButton\"><i class=\"fa fa-trash\"></i></button>" +
                    "</td></tr>";
            }

            $("#AddNewPropertyButton").on('click', function (event) {

                event.preventDefault();

                var key = $("#SampleProperty_Key").val();
                var value = $("#SampleProperty_Value").val();

                if (key == '' || value == '') {
                    return;
                }

                if ($('#' + key + 'PropertyInput').length > 0) {
                    //TODO: notification?
                    return;
                }

                $("#SampleProperty_Value").val("");
                $("#SampleProperty_Key").val("");

                var html = getPropertyTableRow(key, value);

                $("#PropertyTableBodyId").append(html);

                propertyIndex++;
                propertyCount++;
                $("#PropertyTableId").show();
            });

            $(document).on('click', '.deletePropertyButton', function (event) {

                event.preventDefault();

                var tag = $(this).parent().parent();

                var inputs = tag.find("input");
                $(inputs).each(function (i) {
                    $(this).val("");
                });

                tag.hide();
                propertyCount--;
            });
        };

        return {
            initModal: initModal
        }
    };
});
