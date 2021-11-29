using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.AuditLogging
{
    public class AuditLoggingFilter
    {
        public string ApplicationName { get; set; }
        public string ClientName { get; set; }
    }
    public class AuditLoggingFilterOptions
    {
        public AuditLoggingFilterOptions()
        {
            this.Filters = new Dictionary<string, AuditLoggingFilter>();
        }
        public Dictionary<string, AuditLoggingFilter> Filters { get; set; }

        public void AddOrReplaceFilter(string name,string applicationName=null,string clientName=null)
        {
            Filters[name] = new AuditLoggingFilter() { ApplicationName = applicationName, ClientName = clientName };
        }
    }
}
