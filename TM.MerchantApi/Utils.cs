using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace TM.MerchantApi
{
    public static class Utils
    {
        public static Input<TDto> CreateInput<TDto>(TDto data, string merchantId, string key1, string key2, string version)
        {
            var result = new Input<TDto>()
            {
                data = data,
                merchantId = merchantId,
                requestId = GenerateGuid(),
                timestamp = GetTimestamp(),
                version = version
            };
            result.verificationCode = CalcVerificationCode(result, key1, key2);
            return result;
        }

        public static Output<TDto> CreateSuccessOutput<TDto>(TDto data, string key1, string key2)
        {
            var result = new Output<TDto>()
            {
                responseId = GenerateGuid(),
                returnCode = 200,
                returnMessage = "成功",
                timestamp = GetTimestamp(),
                data = data
            };
            result.verificationCode = CalcVerificationCode(result, key1, key2);
            return result;
        }

        public static Output<TDto> CreateErrorOutput<TDto>(TDto data, string key1, string key2, short errorCode, string errorMessage)
        {
            var result = new Output<TDto>()
            {
                responseId = GenerateGuid(),
                returnCode = errorCode,
                returnMessage = $"失敗︰{errorMessage}",
                timestamp = GetTimestamp(),
                data = data
            };
            result.verificationCode = CalcVerificationCode(result, key1, key2);
            return result;
        }

        public static bool IsVerficationCodeValid<TDto>(Input<TDto> input, string key1, string key2)
        {
            return Verify(input, key1, key2, input.verificationCode);
        }

        public static bool IsVerficationCodeValid<TDto>(Output<TDto> output, string key1, string key2)
        {
            return Verify(output, key1, key2, output.verificationCode);
        }

        /// <summary>
        /// 建立 Guid string
        /// </summary>
        private static string GenerateGuid()
        {
            return Guid.NewGuid().ToString();
        }

        /// <summary>
        /// 取得 UTC 時間戳
        /// </summary>
        private static long GetTimestamp()
        {
            return DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        }

        /// <summary>
        /// 計算驗證碼
        /// </summary>
        private static string CalcVerificationCode(object input, string key1, string key2)
        {
            var jObj = JObject.FromObject(input);
            jObj.Remove("verificationCode");

            SortJson(jObj);

            var jsonStr = key1 + JsonConvert.SerializeObject(jObj) + key2;
            var sha256 = hashSha256(jsonStr);

            return sha256;
        }

        /// <summary>
        /// 驗證驗證碼
        /// </summary>
        private static bool Verify(object input, string key1, string key2, string originalVerficationCode)
        {
            var newVerificationCode = CalcVerificationCode(input, key1, key2);
            return originalVerficationCode == newVerificationCode;
        }

        /// <summary>
        /// 排序 Json 屬性
        /// </summary>
        private static void SortJson(JToken jTok)
        {
            if (jTok is JObject)
            {
                var jObj = (JObject)jTok;
                var props = jObj.Properties().ToList();

                jObj.RemoveAll();

                foreach (var prop in props.OrderBy(p => p.Name))
                {
                    if (prop.Name == "vendorParameter")
                    {
                        handleVendor(prop.Value);
                        jObj.Add(prop);
                        continue;
                    }

                    jObj.Add(prop);
                    SortJson(prop.Value);
                }
            }
            else if (jTok is JArray)
            {
                var jArr = (JArray)jTok;
                foreach (var childJTok in jArr)
                {
                    SortJson(childJTok);
                }
            }
        }

        private static void handleVendor(JToken jTok)
        {
            if (!(jTok is JObject)) return;
            var jObj = (JObject)jTok;
            var dictionary = jObj.Properties().ToDictionary(x => x.Name);

            jObj.RemoveAll();

            jObj.Add(dictionary["merID"]);
            jObj.Add(dictionary["merchantId"]);
            jObj.Add(dictionary["terminalID"]);
        }

        /// <summary>
        /// sha256 雜湊
        /// </summary>
        public static string hashSha256(string str)
        {
            SHA256 sha256 = SHA256Managed.Create();
            byte[] bytes = Encoding.UTF8.GetBytes(str);
            byte[] hash = sha256.ComputeHash(bytes);

            StringBuilder result = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                result.Append(hash[i].ToString("X2"));
            }

            return result.ToString().ToLower();
        }
    }
}