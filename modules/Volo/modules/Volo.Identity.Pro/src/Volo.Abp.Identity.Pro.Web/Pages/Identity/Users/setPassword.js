var abp = abp || {};
$(function () {
    abp.modals.changeUserPassword = function () {
        var initModal = function (publicApi, args) {
            var $newPasswordInput = $("#NewPasswordInput");
            var generateRandomPasswordButton = $("#GenerateRandomPasswordButton");

            var specials = '!@#$%&*()_+{}<>?[]./';
            var lowercase = 'abcdefghijklmnopqrstuvwxyz';
            var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var numbers = '0123456789';

            var all = specials + lowercase + uppercase + numbers;

            generateRandomPasswordButton.click(function () {
                var password = '';
                password += pickLetters(specials, 1);
                password += pickLetters(lowercase, 1);
                password += pickLetters(uppercase, 1);
                password += pickLetters(numbers, 1);
                password += pickLetters(all, 4, 4);
                password = shuffleString(password);

                $newPasswordInput.val(password);
                $newPasswordInput.attr("type", "text");
            });

            function pickLetters(text, min, max) {
                var n, chars = '';

                if (typeof max === 'undefined') {
                    n = min;
                } else {
                    n = min + Math.floor(Math.random() * (max - min + 1));
                }
                for (var i = 0; i < n; i++) {
                    chars += text.charAt(Math.floor(Math.random() * text.length));
                }

                return chars;
            }

            function shuffleString(text) {
                var array = text.split('');
                var tmp, current, top = array.length;

                if (top) while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }

                return array.join('');
            }
        };
        return {
            initModal: initModal
        };
    };
});