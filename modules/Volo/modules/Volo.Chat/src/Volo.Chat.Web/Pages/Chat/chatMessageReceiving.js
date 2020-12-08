(function ($) {

    abp.event.on('abp.serviceProxyScriptInitialized', function () {
        $(function () {

            if ($('body').hasClass('abp-application-layout') && abp.currentUser && abp.currentUser.id) {

                var l = abp.localization.getResource('Chat');
                var isChatPageOpen = $('#chat_wrapper').length > 0;

                if (!isChatPageOpen) {
                    volo.chat.users.contact.getTotalUnreadMessageCount({}).then(function (result) {
                        addUnreadMessageToChatIcon(result);
                    });
                }

                var addUnreadMessageToChatIcon = function (count = 1) {
                    var chatIcon = $('#navbarToolbar').find('a[href="/Chat"]');
                    var span = $(chatIcon).find('span');
                    if (span.length > 0) {
                        var prevCount = parseInt(span.html().trim());
                        span.html(prevCount + count);
                    } else if (count > 0) {
                        chatIcon.html(chatIcon.html() +
                            '<span class="badge badge-info" style="top: -10px; left:-5px"> ' +
                            count +
                            ' </span>');
                    }
                };

                var connection = new signalR.HubConnectionBuilder().withUrl("/signalr-hubs/chat").build();

                connection.on("ReceiveMessage", function (message) {
                    if (isChatPageOpen) {
                        $(document).trigger("ChatMessageReceived", message);
                    } else {
                        addUnreadMessageToChatIcon();

                        var senderTitle = message.senderName && message.senderName != '' ?
                            message.senderName + (message.senderSurname ? ' ' + message.senderSurname : '')
                            : message.senderUsername;

                        var shortMessage = message.text.length > 50 ? message.text.substring(0, 49) + '...' : message.text;

                        abp.notify.info(senderTitle + ': ' + shortMessage, l('NewChatMessage'), {
                            onclick: function () {
                                window.location.replace("/chat?conversation_id=" + message.senderUserId);
                            }
                        });
                    }
                });

                connection.start().then(function () {
                })
                    .catch(function (err) {
                        return console.error(err.toString());
                    });

            }
        });

    });
})(jQuery);
