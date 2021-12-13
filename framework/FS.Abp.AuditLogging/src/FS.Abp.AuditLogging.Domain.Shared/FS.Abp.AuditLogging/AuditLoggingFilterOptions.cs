using FS.Abp.AuditLogging.Filters;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.AuditLogging
{
    public class AuditLoggingFilterOptions
    {
        public AuditLoggingFilterOptions()
        {
            this.Filters = new Dictionary<string, List<AuditLogActionFilter>>();
        }
        public Dictionary<string, List<AuditLogActionFilter>> Filters { get; set; }

        public void AddOrReplaceFilter(string name, params AuditLogActionFilter[] filter)
        {
            Filters[name] = new List<AuditLogActionFilter>();

            Filters[name].AddRange(filter);
        }
    }
}
