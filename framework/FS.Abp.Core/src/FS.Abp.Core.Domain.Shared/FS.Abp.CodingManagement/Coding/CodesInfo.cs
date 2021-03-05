using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.CodingManagement.Coding
{
    public class CodesInfo
    {
        public Guid Id { get; set; }
        public string No { get; set; }

        public string DisplayName { get; set; }

        public string Description { get; set; }

        public List<CodesInfo> Children { get; set; }
        public bool Enable { get; set; }
    }
}
