using System;
using System.Security.Cryptography;
using System.Text;

namespace Volo.Payment
{
    public static class HmacMd5HashHelper
    {
        public static string GetMd5Hash(string hashString, string signature)
        {
            var binaryHash = new HMACMD5(Encoding.UTF8.GetBytes(signature))
                .ComputeHash(Encoding.UTF8.GetBytes(hashString));

            var hash = BitConverter.ToString(binaryHash)
                .Replace("-", string.Empty)
                .ToLowerInvariant();

            return hash;
        }
    }
}
