using NPOI.SS.UserModel;
using Npoi.Mapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace FS.Abp.Npoi.Mapper
{ 
    public class VirtualFileNpoiReader :  IVirtualFileNpoiReader
    {
        private readonly Volo.Abp.VirtualFileSystem.IVirtualFileProvider _virtualFileProvider;
        public VirtualFileNpoiReader(
          Volo.Abp.VirtualFileSystem.IVirtualFileProvider virtualFileProvider
            
            ) { 
          this._virtualFileProvider = virtualFileProvider;
        }

        public List<T> Read<T>(string filePath, string sheetName)
            where T:class,new()
        {           
            var file = _virtualFileProvider.GetFileInfo(filePath);
            if (!file.Exists)
                return null;              
            global::Npoi.Mapper.Mapper mapper = new global::Npoi.Mapper.Mapper(file.PhysicalPath);            
            List<T> sheet = mapper.Take<T>(sheetName).Select(x=>x.Value).ToList();       
            return sheet;
        }
    }
}
