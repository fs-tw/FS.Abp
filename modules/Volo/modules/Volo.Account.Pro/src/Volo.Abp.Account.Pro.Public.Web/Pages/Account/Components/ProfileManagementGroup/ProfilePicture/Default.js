(function ($) {

    $(function () {
        var l = abp.localization.getResource('AbpAccount');

        var _accountService = volo.abp.account.account;

        var UPPY_UPLOAD_ENDPOINT = "/api/account/profile-picture-file";
        
        function getUppyHeaders() {
          var headers = {};
          headers[abp.security.antiForgery.tokenHeaderName] = abp.security.antiForgery.getToken();

          return headers;
        }

        var UPPY_OPTIONS = {
            endpoint: UPPY_UPLOAD_ENDPOINT,
            formData: true,
            fieldName: "image",
            method: "post",
            headers: getUppyHeaders()
        };

        var UPPY = Uppy.Core().use(Uppy.XHRUpload, UPPY_OPTIONS);

        var UPPY_FILE_ID = "uppy-upload-file";

        var fileInput = $("#ChangeProfilePictureForm").find("#Picture");

        var imageContainer = document.getElementById("image");
        imageContainer.addEventListener("ready", putSampleImages);
        imageContainer.addEventListener("cropmove", putSampleImages);
        imageContainer.addEventListener("zoom", putSampleImages);

        var cropper = null;
        var saveProfilePictureBtn = $("#SaveProfilePicture");
        var imageProcessSection = $("div.image-process-section");

        var ppTypeRadio = $(".pp-type-selector");
        var uploadFileContainer = $("div#UploadPPContainer");

        function getSelectedPPTypeValue() {
            return $("input[name=pptype]:checked", "#ChangeProfilePictureForm").val();
        }

        ppTypeRadio.change(function () {
            var selectedValue = getSelectedPPTypeValue();

            if (selectedValue === "use-picture") {
                uploadFileContainer.removeClass("hidden-section");
            } else {
                uploadFileContainer.addClass("hidden-section");

                if (cropper) {
                    $("ul.sample-images li").html("");
                    cropper.destroy();
                    imageContainer.src = "";
                    fileInput.val("");
                }
            }
        });

        var fr = new FileReader();
        fr.onload = function (e) {
            imageContainer.src = this.result;

            cropper = new Cropper(imageContainer, {
                aspectRatio: 1 / 1,
                viewMode: 1,
            });

            putSampleImages();
        };

        fileInput.change(function () {
            if (cropper) {
                cropper.destroy();
                cropper = null;
            }

            var cursorInfo = $('#CursorInfo');
            cursorInfo.removeClass('hidden-section');
            cursorInfo.addClass('cursor-info');

            fr.readAsDataURL($(this).prop("files")[0]);
            imageProcessSection.css("display", "initial");
        });

        function putSampleImages() {
            var places = [
                ["big", 250],
                ["medium", 150],
                ["small", 75],
            ];

            for (let i = 0; i < places.length; i++) {
                var place = places[i];
                var selector = "ul.sample-images li." + place[0];

                $(selector).html(
                    cropper.getCroppedCanvas({ width: place[1], height: place[1] })
                );
            }
        }

        saveProfilePictureBtn.click(function (e) {
            e.preventDefault();

            var message = null;
            var callBack = null;

            var selectedType = getSelectedPPTypeValue();

            if (selectedType === "use-gravatar") {
                // Use Gravatar

                message = l("UseGravatarConfirm");
                callBack = function (isConfirmed) {
                    if (!isConfirmed) {
                        return;
                    }

                    _accountService
                        .setProfilePicture({ type: 1 })
                        .then(function (result) {
                            window.location.reload();
                        });
                };
            } else if (selectedType === "use-default") {
                message = l("NoProfilePictureConfirm");

                callBack = function (isConfirmed) {
                    if (!isConfirmed) {
                        return;
                    }

                    _accountService
                        .setProfilePicture({ type: 0 })
                        .then(function (result) {
                            window.location.reload();
                        });
                };
            } else {
                if (!cropper) {
                    abp.message.warn(l("PleaseSelectImage"));
                    return;
                }

                var canvas = null;

                try {
                    canvas = cropper.getCroppedCanvas();
                } catch (e) {}

                if (canvas === null) {
                    abp.message.warn(l("PleaseSelectImage"));
                    return;
                }

                message = l("PPUploadConfirm");
                callBack = function (isConfirmed) {
                    if (!isConfirmed) {
                        return;
                    }

                    canvas.toBlob(function (blob) {
                        UPPY.reset();

                        UPPY.addFile({
                            id: UPPY_FILE_ID,
                            name: fileInput[0].files[0].name, // file name
                            type: blob.type, // file type
                            data: blob, // file blob
                        });

                        UPPY.upload().then((result) => {
                            if (result.failed.length > 0) {
                                abp.message.error(l("UploadFailedMessage"));
                            } else {
                                window.location.reload();
                            }
                        });
                    });
                };
            }
            abp.message.confirm(message, l("AreYouSure")).then(callBack);
        });
    });

})(jQuery);
