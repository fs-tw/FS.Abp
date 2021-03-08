using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace FS.Abp.VirtualFileSystem
{
    public interface IVirtualFileJsonReader
    {
        T ReadJson<T>(string filePath);
    }

    public class VirtualFileJsonReader : Volo.Abp.Domain.Services.IDomainService, IVirtualFileJsonReader
    {
        private readonly Volo.Abp.VirtualFileSystem.IVirtualFileProvider _virtualFileProvider;

        public VirtualFileJsonReader(
            Volo.Abp.VirtualFileSystem.IVirtualFileProvider virtualFileProvider)
        {
            this._virtualFileProvider = virtualFileProvider;
        }

        public T ReadJson<T>(string filePath)
        {
            var result = default(T);
            var file = _virtualFileProvider.GetFileInfo(filePath);
            if (!file.Exists)
                return result;
            var serializer = new JsonSerializer();
            using (var sr = new StreamReader(file.CreateReadStream()))
            using (var jsonTextReader = new JsonTextReader(sr))
            {
                result = serializer.Deserialize<T>(jsonTextReader);
            }
            return result;
        }
    }
}
