var abp = abp || {};
$(function () {
    abp.modals.clientUpdate = function () {
        var initModal = function (publicApi, args) {
            var $form = publicApi.getForm();
            var l = abp.localization.getResource('AbpIdentityServer');

            function getGuid() {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            }



            var callbackUriIndex = $('#CallbackUriStartIndex').val();
            var signoutUriIndex = $('#SignoutUriStartIndex').val();
            var corsUriIndex = $('#CorsUriStartIndex').val();

            var getCallbackUriTableRow = function (type) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + type + " </td><td>\r\n" +
                    "                                       <input type=\"text\" hidden name=\"Client.RedirectUris[" + callbackUriIndex++ + "]\"/ value=\"" + type + "\">\r\n " +
                    "                                       <button type=\"button\"  class=\"btn btn-danger btn-sm float-right deleteApplicationUriButton\"><i class=\"fa fa-trash\"></i></button>" +
                    "</td></tr>";
            };

            var getSignoutUriTableRow = function (type) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + type + " </td><td>\r\n" +
                    "                                       <input type=\"text\" hidden name=\"Client.PostLogoutRedirectUris[" + signoutUriIndex++ + "]\"/ value=\"" + type + "\">\r\n " +
                    "                                       <button type=\"button\"  class=\"btn btn-danger btn-sm float-right deleteApplicationUriButton\"><i class=\"fa fa-trash\"></i></button>" +
                    "</td></tr>";
            };

            var getCorsUriTableRow = function (type) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + type + " </td><td>\r\n" +
                    "                                       <input type=\"text\" hidden name=\"Client.AllowedCorsOrigins[" + corsUriIndex++ + "]\"/ value=\"" + type + "\">\r\n " +
                    "                                       <button type=\"button\"  class=\"btn btn-danger btn-sm float-right deleteApplicationUriButton\"><i class=\"fa fa-trash\"></i></button>" +
                    "</td></tr>";
            };

            var addNewApplicationUrifunction = function (sampleElement, uriType, getTableFunction) {
                var type = sampleElement.val();

                if (type === '') {
                    return;
                }

                type = type.trim();
                sampleElement.val('');

                var html = getTableFunction(type);

                $('#'+uriType+'TableBodyId').append(html);

                $('#' + uriType + 'TableId').show();
            };

            $("#AddNewCallbackUriButton").on('click', function (event) {
                event.preventDefault();

                addNewApplicationUrifunction($("#SampleCallbackUri"), 'CallbackUri', getCallbackUriTableRow);
            });

            $("#AddNewSignoutUriButton").on('click', function (event) {
                event.preventDefault();

                addNewApplicationUrifunction($("#SampleSignoutUri"), 'SignoutUri', getSignoutUriTableRow);
            });

            $("#AddNewCorsUriButton").on('click', function (event) {
                event.preventDefault();

                addNewApplicationUrifunction($("#SampleCorsUri"), 'CorsUri', getCorsUriTableRow);
            });

            $(document).on('click', '.deleteApplicationUriButton', function (event) {

                event.preventDefault();

                var tag = $(this).parent().parent();

                var inputs = tag.find("input");
                $(inputs).each(function (i) {
                    $(this).val("");
                });

                tag.hide();
            });


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

            var claimIndex = $('#ClaimsStartIndex').val();
            var claimCount = $('#ClaimsStartIndex').val();

            var getClaimTableRow = function (type, value) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + type + " </td><td>\r\n" +
                    "                                        " + value + "\r\n </td> <td>" +
                    "                                       <input type=\"text\" hidden name=\"Client.Claims[" + claimIndex + "].Type\"/ value=\"" + type + "\">\r\n " +
                    "                                       <input type=\"text\" hidden name=\"Client.Claims[" + claimIndex + "].Value\" value=\"" + value + "\"/>\r\n " +
                    "                                       <button type=\"button\" class=\"btn btn-danger btn-sm float-right deleteClaimButton\"><i class=\"fa fa-trash\"></i></button>" +
                    "</td></tr>";
            }

            $("#AddNewClaimButton").on('click', function (event) {

                event.preventDefault();

                var type = $("#SampleClaim_Type").val();
                var value = $("#SampleClaim_Value").val();

                if (type == '' || value == '') {
                    return;
                }

                $("#SampleClaim_Value").val("");

                var html = getClaimTableRow(type, value);

                $("#ClaimTableBodyId").append(html);

                claimIndex++;
                claimCount++;
                $("#ClaimTableId").show();
            });

            $(document).on('click', '.deleteClaimButton', function (event) {

                event.preventDefault();

                var tag = $(this).parent().parent();

                var inputs = tag.find("input");
                $(inputs).each(function (i) {
                    $(this).val("");
                });

                tag.hide();
                claimCount--;

                if (claimCount == 0) {
                    $("#ClaimTableId").hide();
                }

            });

            var restrictionIndex = $('#RestrictionStartIndex').val();

            var getRestrictionTableRow = function (type) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + type + " </td><td>\r\n" +
                    "                                       <input type=\"text\" hidden name=\"Client.IdentityProviderRestrictions[" + restrictionIndex + "]\"/ value=\"" + type + "\" id=\"" + type + "RestrictionInput\">\r\n " +
                    "                                       <button type=\"button\"  class=\"btn btn-danger btn-sm float-right deleteRestrictionButton\"><i class=\"fa fa-trash\"></i></button>" +
                    "</td></tr>";
            };

            $("#AddNewRestrictionButton").on('click', function (event) {

                event.preventDefault();

                var type = $("#SampleIdentityProviderRestriction").val();

                if (type == '') {
                    return;
                }

                if ($('#' + type + 'RestrictionInput').length > 0) {
                    return;
                }

                $("#SampleRestriction").val('');

                var html = getRestrictionTableRow(type);

                $("#RestrictionTableBodyId").append(html);

                restrictionIndex++;
                $("#RestrictionTableId").show();
            });

            $(document).on('click', '.deleteRestrictionButton', function (event) {

                event.preventDefault();

                var tag = $(this).parent().parent();

                var inputs = tag.find("input");
                $(inputs).each(function (i) {
                    $(this).val("");
                });

                tag.hide();

            });

            var propertyIndex = $('#PropertyStartIndex').val();
            var propertyCount = $('#PropertyStartIndex').val();

            var getPropertyTableRow = function (key, value) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + key + " </td><td>\r\n" +
                    "                                        " + value + "\r\n </td> <td>" +
                    "                                       <input type=\"text\" hidden name=\"Client.Properties[" + propertyIndex + "].Key\"/ value=\"" + key + "\" id=\"" + key + "PropertyInput\">\r\n " +
                    "                                       <input type=\"text\" hidden name=\"Client.Properties[" + propertyIndex + "].Value\" value=\"" + value + "\"/>\r\n " +
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

            var grantTypeIndex = $('#GrantTypeStartIndex').val();

            $("#GrantTypeSelect").change(function () {
                if ($("#GrantTypeSelect").val() === 'custom') {
                    $("#GrantTypeCustomInputGroup").show();
                } else {
                    $("#GrantTypeCustomInput").val('');
                    $("#GrantTypeCustomInputGroup").hide();
                }
            });

            var getGrantTypeTableRow = function (type) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + type + " </td><td>\r\n" +
                    "                                       <input type=\"text\" hidden name=\"Client.AllowedGrantTypes[" + grantTypeIndex + "]\"/ value=\"" + type + "\" id=\"" + type +"GrantTypeInput\">\r\n " +
                    "                                       <button type=\"button\" class=\"btn btn-danger btn-sm float-right deleteGrantTypeButton\"><i class=\"fa fa-trash\"></i></button>" +
                    "</td></tr>";
            }

            $("#AddNewGrantTypeButton").on('click', function (event) {

                event.preventDefault();

                var type = '';
                if ($("#GrantTypeCustomInput").val() !== '') {
                    type = $("#GrantTypeCustomInput").val();
                    $("#GrantTypeCustomInput").val('');
                }
                else {
                    type = $("#GrantTypeSelect").val();
                }

                if (type == '') {
                    return;
                }

                if ($('#' + type + 'GrantTypeInput').length > 0) {
                    return;
                }

                var html = getGrantTypeTableRow(type);

                $("#GrantTypeTableBodyId").append(html);

                grantTypeIndex++;
                $("#GrantTypeTableId").show();
            });

            $(document).on('click', '.deleteGrantTypeButton', function (event) {

                event.preventDefault();

                var tag = $(this).parent().parent();

                var inputs = tag.find("input");
                $(inputs).each(function (i) {
                    $(this).val("");
                });

                tag.hide();
            });

            var secretIndex = $('#SecretsStartIndex').val();
            var secretCount = $('#SecretsStartIndex').val();

            var getTableRow = function (type, value, description, expiration) {
                return "<tr>\r\n<td>\r\n" +
                    "                                        " + type + " </td><td>\r\n" +
                    "                                        " + value + "\r\n </td> <td>" +
                    "                                        " + description + "</td> <td>\r\n" +
                    "                                       " + expiration + " </td>\r\n<td hidden>\r\n " +
                    "                                       <input type=\"text\" name=\"Client.ClientSecrets[" + secretIndex + "].Type\"/ value=\"" + type + "\">\r\n " +
                    "                                       <input type=\"text\" name=\"Client.ClientSecrets[" + secretIndex + "].Value\" value=\"" + value + "\"/>\r\n " +
                    "                                       <input type=\"text\" name=\"Client.ClientSecrets[" + secretIndex + "].Description\" value=\"" + description + "\"/>\r\n" +
                    "                                        <input type=\"date\" name=\"Client.ClientSecrets[" + secretIndex + "].Expiration\" value=\"" + expiration + "\"/></td><td>" +
                    "                                       <button type=\"button\" class=\"btn btn-danger btn-sm float-right deleteSecretButton\"><i class=\"fa fa-trash\"></i></button>" +
                    "</td></tr>";
            }

            $("#AddNewSecretButton").on('click', function (event) {

                event.preventDefault();

                var type = $("#SampleSecret_Type").val();
                var value = $("#SampleSecret_Value").val();

                if (type == '' || value == '') {
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


        };

        return {
            initModal: initModal
        }
    };
});
