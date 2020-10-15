using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FS.Abp.Core.Utils
{
    public static class Helper
    {
        public static readonly bool IsRunningFromXUnit =
            AppDomain.CurrentDomain.GetAssemblies().Any(
                a => a.FullName.ToLowerInvariant().StartsWith("xunit.core"));
    }
}
