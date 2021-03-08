using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.CodingManagement.Coding
{
    public class BasicCodesInfo
    {
        public Guid? CodesId { get; }

        public string Name { get; }
        public BasicCodesInfo(Guid? codesId, string name = null)
        {
            CodesId = codesId;
            Name = name;
        }

    }
}
