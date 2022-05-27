using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.SyncTable.Etos
{
    public class SyncTableEto<T> where T : class
    {
        public Guid Id { get; set; }

        public string Event { get; set; }

        public DateTime ExecuteTime { get; set; }

        public T Data { get; set; }

        public SyncTableEto(T data)
        {
            this.Data=data;
        }
    }
}
