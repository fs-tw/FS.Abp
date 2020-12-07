using System;

namespace Volo.Abp.AuditLogging
{
    public class GetErrorRateFilter
    {
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
    }
}