using System.Collections.Generic;

namespace Volo.Abp.AuditLogging
{
    public class GetAverageExecutionDurationPerDayOutput
    {
        public Dictionary<string, double> Data { get; set; }
    }
}