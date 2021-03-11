using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace FS.Abp.Core.Utils
{
    public static class Cryptography
    {
        public static string DecryptionByAES(byte[] cipherText, byte[] key, byte[] IV)
        {
            string decrypted;

            //檢查參數
            if (cipherText == null || cipherText.Length <= 0)
                throw new ArgumentNullException("沒有要解密的內容");
            if (key == null || key.Length <= 0)
                throw new ArgumentNullException("沒有提供金鑰");
            if (IV == null || IV.Length <= 0)
                throw new ArgumentNullException("沒有提供IV");

            //這裡使用Aes創建編譯物件
            using (Aes aes = Aes.Create())
            {
                aes.Key = key;
                aes.IV = IV;

                //創建密碼解譯轉換運算
                ICryptoTransform encryptor = aes.CreateDecryptor(aes.Key, aes.IV);
                //先把密文byte放到記憶體串流，再用decrypt方法(解碼)讀取去
                using (MemoryStream mDecrypt = new MemoryStream(cipherText))
                {
                    //使用CryptoStream創建解碼轉換方法
                    using (CryptoStream cDecrypt = new CryptoStream(mDecrypt, encryptor, CryptoStreamMode.Read))
                    {
                        //以解碼轉換方法處理資料流
                        using (StreamReader swStream = new StreamReader(cDecrypt))
                        {
                            //讀出資料流(同時解碼)
                            decrypted = swStream.ReadToEnd();
                        }
                    }
                }
            }
            return decrypted;
        }
    }
}
