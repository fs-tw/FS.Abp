var abp = abp || {};
$(function () {
    abp.modals.clientCreate = function () {
        var initModal = function (publicApi, args) {
            var $form = publicApi.getForm();


            $(".otherResource").on('click', function (event) {
                event.preventDefault();

                var otherId = $(this).attr("id");
                var inputValue = $(this).attr("data-name");
                var name = otherId.substring(0, otherId.length - "OtherId".length);
                var inputId = name + "InputId";
                var ownedId = name + "OwnedId";


                $("#" + ownedId).show();
                $("#" + otherId).hide();
                $("#" + inputId).val(inputValue);
            });

            $(".ownedResource").on('click', function (event) {
                event.preventDefault();

                var ownedId = $(this).attr("id");
                var name = ownedId.substring(0, ownedId.length - "OwnedId".length);
                var inputId = name + "InputId";
                var otherId = name + "OtherId";

                $("#" + otherId).show();
                $("#" + ownedId).hide();
                $("#" + inputId).val("");
            });

            $(".ownedResource").hide();


            var secretIndex = 0;
            var secretCount = 0;

            var getTableRow = function (type, value, description, expiration) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + type + " </td><td>\r\n" +
                    "                                        " + value + "\r\n </td> <td>" +
                    "                                        " + description + "</td> <td>\r\n" +
                    "                                       " + expiration + " </td>\r\n<td hidden>\r\n " +
                    "                                       <input type=\"text\" name=\"Client.Secrets[" + secretIndex + "].Type\"/ value=\"" + type + "\">\r\n " +
                    "                                       <input type=\"text\" name=\"Client.Secrets[" + secretIndex + "].Value\" value=\"" + value + "\"/>\r\n " +
                    "                                       <input type=\"text\" name=\"Client.Secrets[" + secretIndex + "].Description\" value=\"" + description + "\"/>\r\n" +
                    "                                        <input type=\"date\" name=\"Client.Secrets[" + secretIndex + "].Expiration\" value=\"" + expiration + "\"/></td><td>" +
                    "                                       <button type=\"button\" class=\"btn btn-outline-danger float-right deleteSecretButton\">Delete</button>" +
                    "</td></tr>";
            }

            $("#AddNewSecretButton").on('click', function (event) {
                event.preventDefault();

                var type = $("#SampleSecret_Type").val();
                var value = $("#SampleSecret_Value").val();

                if (type == '' || value == '') {
                    $("#NewSecretBodyId").slideDown();
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
                $("#NewSecretBodyId").slideUp();
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
        };

        return {
            initModal: initModal
        }
    };
});