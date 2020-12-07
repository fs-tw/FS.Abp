using System;
using System.Collections.Generic;
using System.Text;

namespace Volo.Chat.Settings
{
    public static class ChatSettingNames
    {
        private const string Prefix = "Volo.Chat";

        public static class Messaging
        {
            private const string MessagingPrefix = Prefix + ".Messaging";

            public const string SendMessageOnEnter = MessagingPrefix + ".SendMessageOnEnter";
        }
    }
}
