using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Authentication.External
{
    public class ExternalAuthUserInfo
    {
        public string ProviderKey { get; set; }
        public string EmailAddress { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public Dictionary<string,string> ExtraProperties { get; set; }

        public ExternalAuthUserInfo()
        {
            ExtraProperties = new Dictionary<string, string>();
        }
    }
}
