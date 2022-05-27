using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.SyncTable
{
    public class SyncTable
    {
        public Guid Id { get; set; }

        public string EntityType { get; set; }

        public string Event { get; set; }

        public DateTime ExecuteTime { get; set; }

        public string Message { get; set; }
    }
}
