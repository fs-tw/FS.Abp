using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.EntitySettings
{
    public class BasicEntitySettingInfo
    {
        public Guid? CodesId { get; }

        public string Name { get; }
        internal BasicEntitySettingInfo(Guid? codesId, string name = null)
        {
            CodesId = codesId;
            Name = name;
        }

    }
}
