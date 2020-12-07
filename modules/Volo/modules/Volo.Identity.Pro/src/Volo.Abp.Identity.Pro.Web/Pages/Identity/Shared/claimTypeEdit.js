var abp = abp || {};
$(function () {
    abp.modals.claimTypeEdit = function () {
        var initModal = function (publicApi, args) {
            var $form = publicApi.getForm();

            $('#NewClaimInputs input').keydown(function (e) {
                if (e.keyCode == 13) {
                    $('#CreateNewClaimButton').click();
                    e.preventDefault();
                    return false;
                }
            });

            var getStringInput = function (type, index, regex, claimIndex) {

                var regexValue = '';
                if (regex) {
                    regexValue = 'pattern="' + regex + '"';
                }

                return '<input type="text" class="form-control" id="' +
                    type +
                    'InputId_' +
                    index +
                    '" ' + regexValue +
                    'name = "Claims[' + claimIndex + '].Value[' +
                    index +
                    ']" aria-describedby="DeleteClaim" />';
            };

            var getIntInput = function (type, index, claimIndex) {

                return '<input type="number" class="form-control" id="' +
                    type +
                    'InputId_' +
                    index +
                    '" name="Claims[' + claimIndex + '].Value[' +
                    index +
                    ']" aria-describedby="DeleteClaim" />';
            };

            var getDateTimeInput = function (type, index, claimIndex) {

                return '<input type="date" class="form-control" id="' +
                    type +
                    'InputId_' +
                    index +
                    '" name="Claims['
                    + claimIndex +
                    '].Value[' +
                    index +
                    ']" aria-describedby="DeleteClaim" />';
            };

            var getBooleanInput = function (type, index, claimIndex) {

                return '<select id="' +
                    type +
                    'InputId_' +
                    index +
                    '" name="Claims['
                    + claimIndex +
                    '].Value[' +
                    index +
                    ']" class="form-control" aria-describedby="DeleteClaim">' +
                    '<option value="true" selected>true</option> <option value = "false" > false</option>' +
                    '</select>';
            };

            var getNewInputGroup = function (type, index, regex) {
                var claimIndex = $('#Claims' + type + 'Index').val();
                var valueType = $('#Claims' + claimIndex + 'ValueType').val();

                var input = '';

                if (valueType === 'String') {
                    input = getStringInput(type, index, regex, claimIndex);
                }
                else if (valueType === 'Int') {
                    input = getIntInput(type, index, claimIndex);
                }
                else if (valueType === 'DateTime') {
                    input = getDateTimeInput(type, index, claimIndex);
                }
                else if (valueType === 'Boolean') {
                    input = getBooleanInput(type, index, claimIndex);
                }

                var html =
                    '                  <div id="' + type + 'GroupId_' + index + '")" class="willBeHidden">\r\n' +
                    '                     <div class="input-group  mb-3">' +
                    '                        <div class="input-group-prepend">' +
                    '                            <label class="input-group-text mw-100 fs-9" for="' + type + 'InputId_' + index + '")">' + type + '</label>\r\n' +
                    '                        </div>' +
                    '                            ' + input + '\r\n' +
                    '                                <div class="input-group-append">\r\n' +
                    '                                    <button class="btn btn-danger deleteClaim" type="button" data="' + type + '" index="' + index + '">\r\n' +
                    '                                        <i class="fa fa-trash"></i>\r\n' +
                    '                                    </button>\r\n' +
                    '                                </div>\r\n' +
                    '                        </div>';
                return html;
            };

            var changeCreateInput = function () {
                $('div .newClaimValueInput').hide();
                var type = $('#NewClaimTypeSelect').val();
                $('#New' + type + 'ClaimValueInput').parent().show();
            };

            $('#NewClaimTypeSelect').on('change', function () {
                changeCreateInput();
            });

            var setNewClaim = function (type, value) {
                var baseGroupId = type + 'GroupId_';
                var baseInputId = type + 'InputId_';
                var index = '0';

                while (index < 5000) {
                    if ($('#' + baseGroupId + index).length < 1) {
                        $('#' + baseGroupId + (index - 1)).after(getNewInputGroup(type, index, $('#Claims' + type + 'Regex').val()));
                        $('#' + baseInputId + index).val(value);
                        return;
                    }

                    var oldValue = $('#' + baseInputId + index).val();

                    if (oldValue === undefined || oldValue == '') {
                        $('#' + baseGroupId + index).show();
                        $('#' + baseInputId + index).val(value);
                        return;
                    }

                    index++;
                }
            };

            $('#CreateNewClaimButton').click(function () {
                var type = $('#NewClaimTypeSelect').val();
                var value = $('#New' + type + 'ClaimValueInput').val();

                if (value === undefined || value == '') {
                    return;
                }

                $('#New' + type + 'ClaimValueInput').val('');

                setNewClaim(type, value);
            });

            $(document).on('click', '.deleteClaim', function () {
                var type = $(this).attr('data');
                var index = $(this).attr('index');
                $('#' + type + 'GroupId_' + index).hide();
                $('#' + type + 'InputId_' + index).val('');
            });

            $('div .willBeHidden').hide();

            changeCreateInput();
        };
        return {
            initModal: initModal
        };
    };
});