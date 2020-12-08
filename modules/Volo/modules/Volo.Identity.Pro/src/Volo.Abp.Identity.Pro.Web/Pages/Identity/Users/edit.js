var abp = abp || {};
$(function () {
    abp.modals.editUser = function () {
        var initModal = function (publicApi, args) {
            var $form = publicApi.getForm();

            var l = abp.localization.getResource('AbpIdentity');
            var rolesCount = $('#RolesCount').val();
            var ouCount  = 0;

            $('#Roles :checkbox').change(function () {
                if (this.checked) {
                    rolesCount++;
                    $('#Roles-tab').text(l('Roles{0}', rolesCount));
                } else {
                    rolesCount--;
                    $('#Roles-tab').text(l('Roles{0}', rolesCount));
                }
            });

            $("#JsTreeCheckable").bind("loaded.jstree", function (event, data) {
                $(this).find('.jstree-anchor').each(function (index, element) {
                    var id = $(element).attr('checkbox-id');
                    if ($('#' + id).val() === 'True') {
                        data.instance.check_node(element);
                    }
                })
            });

            $("#JsTreeCheckable").on("check_node.jstree uncheck_node.jstree", function (e, data) {
                $('#' + data.node.a_attr["checkbox-id"]).prop("checked", (data.node.state.checked));
                $('#' + data.node.a_attr["checkbox-id"]).val(data.node.state.checked ? "True" : "False");
                ouCount = data.node.state.checked ? ouCount+1: ouCount-1;
                $('#OrganizationUnits-tab').text(l('OrganizationUnits{0}', ouCount));
            });

            $('#JsTreeCheckable').jstree({
                "checkbox": {
                    "keep_selected_style": false,
                    "three_state": false,
                    "tie_selection": false
                },
                "plugins": ["checkbox"]
            });

        };
        return {
            initModal: initModal
        };
    };
});
