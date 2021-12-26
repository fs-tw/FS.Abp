using AutoFilterer.Types;
using FS.Abp.AutoFilterer;
using System;

namespace FS.Abp.AuditLogging.Filters
{
    public class AuditLogAbpRouteNameFilter : EfCoreFilterBase
    {
        public AuditLogAbpRouteNameFilter(string abpRouteName, Range<DateTime> executionTime)
        {
            AbpRouteName = abpRouteName;
            ExecutionTime = executionTime;
        }

        [EFCoreProperty]
        public string AbpRouteName { get; set; }

        public Range<DateTime> ExecutionTime { get; set; }

    }
}
