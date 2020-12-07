var abp = abp || {};
$(function () {
    abp.modals.apiResourceUpdate = function () {
        var initModal = function (publicApi, args) {

            var l = abp.localization.getResource('AbpIdentityServer');

            var $form = publicApi.getForm();

            $(document).on('click', '.otherClaim', function (event) {

                event.preventDefault();

                var otherId = $(this).attr("id");
                var claimName = $(this).attr("claim-name");
                var name = otherId.substring(0, otherId.length - "OtherId".length);
                var inputId = name + "InputId";
                var ownedId = name + "OwnedId";

                $("#" + ownedId).show();
                $("#" + otherId).hide();
                $("#" + inputId).val(claimName);
            });

            $(document).on('click', '.ownedClaim', function (event) {

                event.preventDefault();

                var ownedId = $(this).attr("id");
                var name = ownedId.substring(0, ownedId.length - "OwnedId".length);
                var inputId = name + "InputId";
                var otherId = name + "OtherId";

                $("#" + otherId).show();
                $("#" + ownedId).hide();
                $("#" + inputId).val("");
            });

            var secretIndex = $('#SecretsStartIndex').val();
            var secretCount = $('#SecretsStartIndex').val();

            var getTableRow = function (type, value, description, expiration) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + type + " </td><td>\r\n" +
                    "                                        " + value + "\r\n </td> <td>" +
                    "                                        " + description + "</td> <td>\r\n" +
                    "                                       " + expiration + " </td>\r\n<td hidden>\r\n " +
                    "                                       <input type=\"text\" name=\"ApiResource.Secrets[" + secretIndex + "].Type\"/ value=\"" + type + "\">\r\n " +
                    "                                       <input type=\"text\" name=\"ApiResource.Secrets[" + secretIndex + "].Value\" value=\"" + value + "\"/>\r\n " +
                    "                                       <input type=\"text\" name=\"ApiResource.Secrets[" + secretIndex + "].Description\" value=\"" + description + "\"/>\r\n" +
                    "                                        <input type=\"date\" name=\"ApiResource.Secrets[" + secretIndex + "].Expiration\" value=\"" + expiration + "\"/></td><td>" +
                    "                                       <button type=\"button\" class=\"btn btn-danger btn-sm float-right deleteSecretButton\">" +
                    "<i class=\"fa fa-trash\"></i>" +
                    "</button>" +
                    "</td></tr>";
            };

            $("#AddNewSecretButton").on('click', function (event) {

                event.preventDefault();

                var type = $("#SampleSecret_Type").val();
                var value = $("#SampleSecret_Value").val();

                if (!type) {
                    abp.message.warn(abp.utils.formatString(l("MissingRequiredField"), l("Type")));
                    return;
                }

                if (!value) {
                    abp.message.warn(abp.utils.formatString(l("MissingRequiredField"), l("Value")));
                    return;
                }

                var description = $("#SampleSecret_Description").val();
                var expiration = $("#SampleSecret_Expiration").val();

                $("#SampleSecret_Value").val("");
                $("#SampleSecret_Description").val("");
                $("#SampleSecret_Expiration").val("");

                var html = getTableRow(type, value, description, expiration);

                $("#SecretTableBodyId").append(html);

                secretIndex++;
                secretCount++;
                $("#SecretTableId").show();
            });

            $(document).on('click', '.deleteSecretButton', function (event) {

                event.preventDefault();

                var tag = $(this).parent().parent();

                var inputs = tag.find("input");
                $(inputs).each(function (i) {
                    $(this).val("");
                });

                tag.hide();
                secretCount--;

                if (secretCount == 0) {
                    $("#SecretTableId").hide();
                }

            });

            //Properties

            var propertyIndex = $('#PropertyStartIndex').val();
            var propertyCount = $('#PropertyStartIndex').val();

            var getPropertyTableRow = function (key, value) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + key + " </td><td>\r\n" +
                    "                                        " + value + "\r\n </td> <td>" +
                    "                                       <input type=\"text\" hidden name=\"ApiResource.Properties[" + propertyIndex + "].Key\"/ value=\"" + key + "\" id=\"" + key + "PropertyInput\">\r\n " +
                    "                                       <input type=\"text\" hidden name=\"ApiResource.Properties[" + propertyIndex + "].Value\" value=\"" + value + "\"/>\r\n " +
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
        };
    };
});
