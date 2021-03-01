using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Authentication.External
{
    public class ExternalAuthUserInfo
    {
        public string ProviderName { get; set; }
        public string EmailAddress { get; set; }
        public string UserName { get; set; }
        public Dictionary<string,string> ExtraProperties { get; set; }
    }
}
