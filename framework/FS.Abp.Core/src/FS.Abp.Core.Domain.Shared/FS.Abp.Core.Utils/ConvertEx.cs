using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FS.Abp.Core.Utils
{
    public static class Convert
    {
        public static byte[] FromHexString(string hex)
        {
            return Enumerable.Range(0, hex.Length)
                 .Where(x => x % 2 == 0)
                 .Select(x => System.Convert.ToByte(hex.Substring(x, 2), 16))
                 .ToArray();
        }

        internal static string ToBase64String(byte[] vs)
        {
            throw new NotImplementedException();
        }
    }
}
