(function ($) {

    var l = abp.localization.getResource('Chat');
    var _conversationService = volo.chat.conversations.conversation;
    var _contactService = volo.chat.users.contact;
    var _settingService = volo.chat.settings.settings;
    var _wrapper = $('#chat_wrapper');

    var pageSize = 50;

    var queryStringParser = {
        keyValueArray: [],
        getParameterValue: function (parameterName) {
            var queryStringParsed = this.parseToKeyValueArray();

            for (var i = 0; i < queryStringParsed.length; i++) {
                if (queryStringParsed[i].key == parameterName) {
                    return queryStringParsed[i].value;
                }
            }

            return null;
        },
        parseToKeyValueArray: function () {
            if (this.keyValueArray.length === 0 && location.search !== '') {
                var parametersAndValues = location.search.substring(1).split('&');

                for (var i = 0; i < parametersAndValues.length; i++) {
                    var parameterAndValue = parametersAndValues[i].split('=');
                    this.keyValueArray.push({key: parameterAndValue[0], value: parameterAndValue[1]});
                }
            }

            return this.keyValueArray;
        }
    };

    var dateManager = {
        months: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        isToday: function (date) {
            if (date.getFullYear() === (new Date()).getFullYear() &&
                date.getMonth() === (new Date()).getMonth() &&
                date.getDate() === (new Date()).getDate()) {
                return true;
            }
            return false;
        },
        formatMessageDate: function (dateAsString) {
            if (dateAsString === null) {
                return '';
            }

            var date = new Date(dateAsString);

            var formattedTime = (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()) + ':' +
                (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes());

            if (!dateManager.isToday(date)) {

                var year = date.getFullYear() == (new Date()).getFullYear() ? '' : ' ' + date.getFullYear();
                var month = (1 + date.getMonth()).toString();
                var day = date.getDate().toString();

                var formattedDate = day + ' ' + l(dateManager.months[month]) + year;
                formattedTime += ' ' + formattedDate;
            }

            return formattedTime;
        },
        formatContactDate: function (dateAsString) {
            if (dateAsString === null) {
                return '';
            }

            var date = new Date(dateAsString);

            if (!dateManager.isToday(date)) {
                var year = date.getFullYear() == (new Date()).getFullYear() ? '' : date.getFullYear();
                var month = (1 + date.getMonth()).toString();
                var day = date.getDate().toString();

                return day + ' ' + l(dateManager.months[month]) + ' ' + year;
            } else {
                return (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()) + ':' +
                    (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes());
            }
        }
    };

    var colorGenerator = {
        colors: [
            {text: '#ffffff', background: '#3cb160'},
            {text: '#ffffff', background: '#c373cc'},
            {text: '#ffffff', background: '#2b78b3'},
            {text: '#ffffff', background: '#6ac79a'},
            {text: '#ffffff', background: '#aeb140'},
            {text: '#ffffff', background: '#b773c0'},
            {text: '#ffffff', background: '#e16d7a'},
            {text: '#ffffff', background: '#ffac2a'},
            {text: '#ffffff', background: '#21bbc7'},
            {text: '#ffffff', background: '#59ab95'}
        ],
        generateFromString: function (str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return colorGenerator.colors[Math.abs(hash % 10)];
        }
    };

    var avatarManager = {
        init: {},
        createCanvasForUser: function (canvas, username, name) {
            var hashText;
            var text;

            if (name && name.length > 0) {
                hashText = name;

                var nameSplited = name.trim().split(" ");

                if (nameSplited.length >= 2) {
                    var firstName = nameSplited[0];
                    var lastName = nameSplited[nameSplited.length - 1];

                    text = firstName.length >= 1 ? firstName.substring(0, 1) : firstName;
                    text += lastName.length >= 1 ? lastName.substring(0, 1) : lastName;
                } else {
                    text = name.length >= 2 ? name.substring(0, 2) : name;
                }
            } else {
                hashText = username;
                text = username && username.length >= 2 ? username.substring(0, 2) : username;
            }

            var colors = colorGenerator.generateFromString(hashText);

            var ctx = canvas.getContext("2d");

            ctx.fillStyle = colors.background;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = "bold 15px Arial";
            ctx.fillStyle = colors.text;
            ctx.fillText(text.toUpperCase().substring(0, 2), canvas.width / 2 - 10, canvas.height / 2 + 5);
        }
    };

    var contacts = {
        conversations: {},
        init: function () {
            contacts.setContactFilterListener();
            contacts.refresh(contacts.focusOnAContact);
            contacts.setContactChangeListener();
        },
        setContactChangeListener: function () {
            $(document).on('click', '.chat-contact', function (e) {
                var userId = $(this).data('userid');
                var username = $(this).data('username');
                var conversationTitle = $(this).data('conversation-title');
                var isNewContact = $(this).data('is-new-contact');

                _wrapper.find('#Send_Message_Form #userId').val(userId);
                _wrapper.find('#Conversation_Title').html(conversationTitle);
                avatarManager.createCanvasForUser(_wrapper.find('#Conversation_Avatar')[0], username, conversationTitle);

                if (isNewContact == false) {
                    var unreadMessageCount = parseInt($(this).find('.badge-success').html().trim());
                    conversation.loadData(userId, unreadMessageCount);
                } else {
                    conversation.clear();
                }

                contacts.setActiveContact(this);
                _wrapper.find('#Chat_Message_Box').val('');
                _wrapper.find('#Chat_Message_Box').focus();
                _wrapper.find('#Send_Message_Form #Send_Message_Button').prop('disabled', true);
            });
        },
        focusOnAContact: function () {
            var targetConversationId = queryStringParser.getParameterValue('conversation_id');
            if (targetConversationId) {
                _wrapper.find('.chat-contact[data-userid=' + targetConversationId + ']').trigger('click');
            } else {
                $(_wrapper.find('.chat-contact')[0]).trigger('click');
            }
        },
        setActiveContact: function (activeContact) {
            var oldActiveContact = _wrapper.find('.chat-contact, .active');
            if (oldActiveContact.length > 1) {
                $(oldActiveContact).addClass('border-right-0');
                $(oldActiveContact).addClass('list-group-item-light');
                $(oldActiveContact).removeClass('active');
                $(oldActiveContact).removeClass('text-white');
            }
            $(activeContact).removeClass('border-right-0');
            $(activeContact).removeClass('list-group-item-light');
            $(activeContact).addClass('active');
            $(activeContact).addClass('text-white');
        },
        addCanvasToContacts: function () {
            var contacts = _wrapper.find('.chat-contact');

            for (var i = 0; i < contacts.length; i++) {
                var canvas = $(contacts[i]).find('.canvas-avatar')[0];
                var username = $(contacts[i]).data('username');
                var name = $(contacts[i]).data('conversation-title');
                avatarManager.createCanvasForUser(canvas, username, name);
            }
        },
        refresh: function (callback) {
            var filter = _wrapper.find('#Contacts_Filter').val();
            var includeOtherContacts = filter !== null && filter !== '';
            _contactService.getContacts({
                filter: _wrapper.find('#Contacts_Filter').val(),
                includeOtherContacts: includeOtherContacts
            }).then(function (result) {

                var contactsAsHtml = '';
                var otherContact = false;
                for (var i = 0; i < result.length; i++) {
                    if (otherContact === false &&
                        (result[i].lastMessage === null || result[i].lastMessage === '')) {
                        contactsAsHtml += contacts.getSeparatorTemplate();
                        otherContact = true;
                    }
                    contactsAsHtml += contacts.getContactTemplate(result[i], otherContact);
                }

                _wrapper.find('#contact_list').empty();
                _wrapper.find('#contact_list').html(contactsAsHtml);

                contacts.addCanvasToContacts();

                if (callback) {
                    callback();
                }
            });
        },
        shortenMessage: function (message) {
            return message.length > 24 ? message.substring(0, 23) + '...' : message;
        },
        getContactTemplate: function (contact, hideDate) {
            if (contact.lastMessage === null) {
                contact.lastMessage = '';
            }

            var lastMessageDate = contact.lastMessageDate === null || hideDate ? '' : dateManager.formatContactDate(contact.lastMessageDate);
            var isNewContact = contact.lastMessage === null || contact.lastMessage === '';

            var unreadBadge = '';

            if (contact.lastMessageSide === 2 && contact.unreadMessageCount > 0) {
                unreadBadge = '<small class="badge badge-success mr-1">' + contact.unreadMessageCount + '</small>';
            } else {
                unreadBadge = '<small class="badge badge-success mr-1" style="display:none">0</small>';
            }

            var template = "\<a class=\"chat-contact list-group-item list-group-item-action px-4 list-group-item-light rounded-0 border-left-0 border-right-0\" data-conversation-title=\"" + contacts.getName(contact) + "\" data-userid=\"" + contact.userId + "\" data-username=\"" + contact.username + "\" data-is-new-contact=" + isNewContact + ">" +
                "<div class=\"media\">" +
                //"<img src=\"https://avatars.dicebear.com/v2/human/voloqq.svg\" alt=\"user\" width=\"44\" class=\"rounded-circle mx-auto\">" +
                "<canvas class=\"canvas-avatar mx-auto rounded-circle\" width=\"40\" height=\"40\"> .</canvas >" +
                "<div class=\"media-body ml-2 d-none d-md-block\">" +
                "<div class=\"d-flex align-items-center justify-content-between mb-1\">" +
                "<h6 class=\"mb-0\">" +
                unreadBadge + contacts.getName(contact) + "</h6> <small class=\"small font-weight-bold last-message-date\">" + lastMessageDate + "</small>" +
                "</div > " +
                "<p class=\"mb-0 text-small last-message\">" + contacts.shortenMessage(contact.lastMessage) + "</p>" +
                "</div > " +
                "</div > " +
                "</a>";

            return template;
        },
        getName: function (contact) {
            var name = '';

            if (contact.name !== null && contact.name !== '') {
                name += contact.name + ' ';
            }
            if (contact.surname !== null && contact.surname !== '') {
                name += contact.surname;
            }

            if (name === '') {
                name = contact.username;
            }

            return name;
        },
        getSeparatorTemplate: function () {
            var template = "<div class=\"list-group-item px-2 py-1 bg-light text-muted text-center font-size-sm text-uppercase border-left-0 border-right-0\">" +
                "<small>" + l('OtherContacts') + "</small>" +
                "</div>";

            return template;
        },
        addMessage: function (userId, username, name, surname, message, isSent) {

            var messageObj = {
                message: message,
                side: isSent ? 1 : 2,
                messageDate: new Date()
            };

            if (contacts.conversations[userId]) {
                contacts.conversations[userId].messages.unshift(messageObj);
            }

            var contactInHtmlList = _wrapper.find('.chat-contact[data-userid=' + userId + ']');

            if (contactInHtmlList.length > 0) {
                $(contactInHtmlList[0]).find('.last-message').html(contacts.shortenMessage(messageObj.message));
                $(contactInHtmlList[0]).find('.last-message-date').html(dateManager.formatMessageDate(new Date()));

                if (userId !== _wrapper.find('#userId').val()) {
                    var unreadBadge = $(contactInHtmlList[0]).find('.badge-success');
                    if (isSent) {
                        unreadBadge.html('0');
                        unreadBadge.hide();
                    } else {
                        unreadBadge.html(parseInt(unreadBadge.html()) + 1);
                        unreadBadge.show();
                    }
                }

                contacts.moveToTop(userId);
            } else {
                contacts.addNewContact({
                    lastMessage: messageObj.message,
                    lastMessageDate: new Date(),
                    unreadMessageCount: 1,
                    userId: userId,
                    username: username,
                    name: name,
                    surname: surname,
                    lastMessageSide: 2
                });
            }
        },
        addNewContact: function (newContact) {
            var newContactHtml = contacts.getContactTemplate(newContact);

            var currentContactHtml = _wrapper.find('#contact_list').html();
            _wrapper.find('#contact_list').html(newContactHtml + currentContactHtml);
        },
        moveToTop: function (userId) {

            var contactAsHtmlElement = $(_wrapper.find('.chat-contact[data-userid=' + userId + ']')[0]);

            var previousAll = contactAsHtmlElement.prevAll();

            if (previousAll.length > 0) {
                var top = $(previousAll[previousAll.length - 1]);

                var previous = $(previousAll[0]);

                var moveUp = contactAsHtmlElement.attr('offsetTop') - top.attr('offsetTop');

                var moveDown = (contactAsHtmlElement.offset().top + contactAsHtmlElement.outerHeight()) - (previous.offset().top + previous.outerHeight());

                contactAsHtmlElement.css('position', 'relative');
                previousAll.css('position', 'relative');
                contactAsHtmlElement.animate({'top': -moveUp});
                previousAll.animate({'top': moveDown}, {
                    complete: function () {
                        contactAsHtmlElement.parent().prepend(contactAsHtmlElement);
                        contactAsHtmlElement.css({'position': 'static', 'top': 0});
                        previousAll.css({'position': 'static', 'top': 0});
                    }
                });
            }
        },
        setContactFilterListener: function () {
            var typingTimer;
            _wrapper.find('#Contacts_Filter').on('keyup',
                function () {
                    clearTimeout(typingTimer);
                    typingTimer = setTimeout(contacts.refresh, 500);
                });
            _wrapper.find('#Contacts_Filter').on('keydown',
                function () {
                    clearTimeout(typingTimer);
                });
            _wrapper.find('#Contacts_Filter').on('search', function () {
                if (_wrapper.find('#Contacts_Filter').val() === '') {
                    contacts.refresh();
                }
            });

        }
    };

    var conversation = {
        init: function () {
            conversation.setSendMessageListeners();
            conversation.setScrollListeners();
            conversation.setTextBoxListeners();
            conversation.getSendOnEnterSetting();
            conversation.setSendOnEnterSettingListener();
        },
        isScrollAtBottom: false,
        loadData: function (userId, unreadMessageCount) {

            if (contacts.conversations[userId]) {
                conversation.display(contacts.conversations[userId], false, unreadMessageCount);
                return;
            }

            _conversationService.getConversation({
                maxResultCount: pageSize, skipCount: 0, targetUserId: userId
            }).then(function (result) {

                contacts.conversations[userId] = result;
                contacts.conversations[userId].page = 1;
                contacts.conversations[userId].HasMoreMessages = result.messages.length < pageSize ? false : true;

                conversation.display(result, false, unreadMessageCount);
            });
        },
        clear: function () {
            $(_wrapper.find('#chat_conversation')[0]).html('');
        },
        loadMoreData: function (userId) {

            var skipCount = contacts.conversations[userId].page * pageSize;

            _conversationService.getConversation({
                maxResultCount: pageSize, skipCount: skipCount, targetUserId: userId
            }).then(function (result) {

                if (result.messages.length === 0) {
                    contacts.conversations[userId].HasMoreMessages = false;
                    return;
                }

                $.merge(contacts.conversations[userId].messages, result.messages);
                contacts.conversations[userId].page = contacts.conversations[userId].page + 1;
                conversation.display(result, true);
            });

        },
        getReceivedMessageTemplate: function (message) {
            var template = "<div class=\"media w-75 mw-65 w-lp-auto mb-2\">" +
                //"<img src=\"https://avatars.dicebear.com/v2/human/volorewe.svg\" alt=\"user\" width=\"32\" class=\"rounded-circle d-none d-md-block\">"+
                " <div class=\"media-body position-relative ml-3\">" +
                "<div class=\"bg-light shadow rounded py-3 px-4 mb-1\">" +
                "<p class=\"text-small mb-0 text-muted\">" + message.message + "</p>" +
                "</div>" +
                "<p class=\"small text-muted position-absolute m-0\" style=\"opacity: 0.35; width: 100px; right: -110px; top: 1px;\">" + dateManager.formatMessageDate(message.messageDate) + "</p>" +
                "</div>" +
                " </div>";

            return template;
        },
        getSentMessageTemplate: function (message) {

            if (message.message == null) {
                message.message = '';
            }

            var template = "<div class=\"media w-75 mw-65 w-lp-auto ml-auto mb-2\">" +
                "<div class=\"media-body position-relative \">" +
                " <div class=\"bg-primary shadow rounded py-3 px-4 mb-1\">" +
                " <p class=\"text-small mb-0 text-white\">" + (message.message) + "</p>" +
                " </div>" +
                "<p class=\"small text-muted position-absolute text-right m-0\" style=\"opacity: 0.35; width: 100px; left: -110px; top: 1px; \">" + dateManager.formatMessageDate(message.messageDate) + "</p>" +
                " </div>" +
                "</div>";

            return template;
        },
        getUnreadMessagesSeparator: function (unreadMessageCount) {
            var unreadMessageCountText = unreadMessageCount > 1
                ? l('YouHave{0}UnreadMessages', unreadMessageCount)
                : l('YouHaveAnUnreadMessage');

            var template =
                "<div class=\"row justify-content-center unread-message-count-badge-wrapper\">" +
                "<h3>" +
                "<span class=\"badge badge-info\">" +
                unreadMessageCountText +
                "</span>" +
                "</h3>" +
                "</div>";

            return template;
        },
        display: function (data, isExtraData = false, unreadMessageCount = 0) {
            var messagesAsHtml = '';

            for (var i = data.messages.length - 1; i >= 0; i--) {
                if (data.messages[i].side === 1) {
                    messagesAsHtml += conversation.getSentMessageTemplate(data.messages[i]);
                } else {
                    messagesAsHtml += conversation.getReceivedMessageTemplate(data.messages[i]);
                }

                if (!isExtraData && unreadMessageCount > 0 && i === unreadMessageCount) {
                    messagesAsHtml += conversation.getUnreadMessagesSeparator(unreadMessageCount);
                    setTimeout(function () {
                        _wrapper.find('#chat_conversation .unread-message-count-badge-wrapper').remove();
                    }, 5000);
                }
            }

            var userId = _wrapper.find('#Send_Message_Form #userId').val();
            var unreadBadge = $(_wrapper.find('.chat-contact[data-userid=' + userId + ']')[0]).find('.badge-success');

            if (unreadBadge.html().trim() != '0') {
                _conversationService.markConversationAsRead({
                    targetUserId: userId
                });
            }
            unreadBadge.html('0');
            unreadBadge.hide();

            if (isExtraData) {
                var currentMessages = $(_wrapper.find('#chat_conversation')[0]).html();
                $(_wrapper.find('#chat_conversation')[0]).html(messagesAsHtml + currentMessages);

            } else {
                $(_wrapper.find('#chat_conversation')[0]).html(messagesAsHtml);
            }

            if (!isExtraData) {
                conversation.scrollToBottom();
            }
        },
        setSendMessageListeners: function () {
            _wrapper.find('#Send_Message_Form').submit(function (e) {
                e.preventDefault();
                conversation.sendMessage($(this).serializeFormToObject());
            });

            _wrapper.find('#Send_Message_Form').keydown(function (e) {
                if (e.keyCode == 13 && _wrapper.find('#Send_On_Enter')[0].checked) {
                    e.preventDefault();
                    _wrapper.find("#Send_Message_Button").trigger('click');
                    return false;
                }
            });
        },
        setScrollListeners: function () {
            $(_wrapper.find('#chat_conversation_wrapper')[0]).mCustomScrollbar({
                callbacks: {
                    onScroll: function () {
                        if (this.mcs.draggerTop < 5) {
                            var userId = _wrapper.find('#Send_Message_Form #userId').val();
                            if (contacts.conversations[userId].HasMoreMessages) {
                                conversation.loadMoreData(userId);
                            }
                        }

                        if (this.mcs.topPct === 100) {
                            conversation.isScrollAtBottom = true;
                        } else {
                            conversation.isScrollAtBottom = false;
                        }
                    }
                }
            });
        },
        setTextBoxListeners: function () {
            _wrapper.find('#Send_Message_Form #Chat_Message_Box').on('keyup',
                function () {
                    if (_wrapper.find('#Send_Message_Form #Chat_Message_Box').val() === '' || _wrapper.find('#Send_Message_Form #userId').val() === '') {
                        _wrapper.find('#Send_Message_Form #Send_Message_Button').prop('disabled', true);
                    } else {
                        _wrapper.find('#Send_Message_Form #Send_Message_Button').prop('disabled', false);
                    }
                });
        },
        addMessage: function (message) {

            var isScrollAtBottomBeforeMessageAdded = conversation.isScrollAtBottom;

            _wrapper.find('#chat_conversation')
                .append(conversation.getReceivedMessageTemplate({
                    message: message,
                    messageDate: new Date()
                }));

            if (isScrollAtBottomBeforeMessageAdded) {
                conversation.scrollToBottom();
            }

            _conversationService.markConversationAsRead({
                targetUserId: _wrapper.find('#userId').val()
            });
        },
        sendMessage: function (data) {

            if (!data || data.userId === '' || data.message === '') {
                return;
            }

            _conversationService.sendMessage({
                targetUserId: data.userId, message: data.message
            }).then(function () {
                _wrapper.find('#chat_conversation').append(
                    conversation.getSentMessageTemplate({message: data.message, messageDate: new Date()}));
                _wrapper.find('#Chat_Message_Box').val('');

                if (_wrapper.find('#chat_conversation').html() !== '') {
                    contacts.addMessage(data.userId, null, null, null, data.message, true);
                } else {
                    var activeContact = _wrapper.find('.chat-contact, .active')[0];

                    contacts.addNewContact({
                        lastMessage: data.message,
                        lastMessageDate: new Date(),
                        unreadMessageCount: 0,
                        userId: data.userId,
                        username: $(activeContact).data('username'),
                        name: $(activeContact).data('conversation-title'),
                        surname: '',
                        lastMessageSide: 1
                    });
                }

                conversation.scrollToBottom();
                _wrapper.find('#Chat_Message_Box').focus();
                _wrapper.find('#Send_Message_Form #Send_Message_Button').prop('disabled', true);
            });
        },
        getSendOnEnterSetting: function () {
            var checkbox = _wrapper.find("#Send_Message_Form #Send_On_Enter");
            if (abp.setting.getBoolean('Volo.Chat.Messaging.SendMessageOnEnter')) {
                checkbox.prop("checked", true);
            } else {
                checkbox.prop("checked", false);
            }
        },
        setSendOnEnterSettingListener: function () {
            _wrapper.find('#Send_Message_Form #Send_On_Enter').change(function () {
                if (this.checked) {
                    _settingService.setSendOnEnterSetting({sendOnEnter: true});
                } else {
                    _settingService.setSendOnEnterSetting({sendOnEnter: false});
                }
            });
        },
        scrollToBottom: function () {
            $(_wrapper.find('#chat_conversation_wrapper')[0]).mCustomScrollbar('scrollTo', 'bottom', {
                scrollInertia: 0
            });
        }
    };

    contacts.init();
    conversation.init();

    $(document).on("ChatMessageReceived", function (event, message) {

        contacts.addMessage(
            message.senderUserId,
            message.senderUsername,
            message.senderName,
            message.senderSurname,
            message.text,
            false
        );

        if (message.senderUserId === _wrapper.find('#userId').val()) {
            conversation.addMessage(message.text);
        }
    });

}(jQuery));
