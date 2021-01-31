using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Collections;

namespace FS.LineNotify.Webhook
{
    public class LoginCallBackHandlersOptions
    {
        public TypeList<ILoginCallBackHandler> LoginCallBackHandlers { get; } = new TypeList<ILoginCallBackHandler>();
    }
}
