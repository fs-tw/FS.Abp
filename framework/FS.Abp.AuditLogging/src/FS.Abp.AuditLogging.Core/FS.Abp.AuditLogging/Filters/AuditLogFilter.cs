using AutoFilterer.Attributes;
using AutoFilterer.Enums;
using AutoFilterer.Types;
using System;

namespace FS.Abp.AuditLogging.Filters
{
    public class AuditLogFilter : FilterBase
    {
        public Range<DateTime> ExecutionTime { get; set; }

        [StringFilterOptions(StringFilterOption.Contains)]
        [CompareTo("Comments,Exceptions")]
        public string Search { get; set; }
    }
}

