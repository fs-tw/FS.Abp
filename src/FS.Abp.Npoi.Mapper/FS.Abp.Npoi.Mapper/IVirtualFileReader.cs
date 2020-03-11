using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Npoi.Mapper
{
    public interface IVirtualFileNpoiReader: Volo.Abp.DependencyInjection.ITransientDependency
    {
        List<T> Read<T>(string filePath, string sheetName)
            where T : class, new();

    }
}
