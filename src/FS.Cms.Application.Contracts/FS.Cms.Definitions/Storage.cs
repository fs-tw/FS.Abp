using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Cms.Definitions
{
    public class StorageDto
    {
        public Guid Id { get; set; }
        public string FileName { get; set; }
        public string FileUrl { get; set; }
        public DateTime CreationTime { get; set; }
        public string FileSizeStr { get; set; }
    }


    public class PutStorageLockDto
    {
        public Boolean SetLock { get; set; }        
    }

    public class StorageLockDto 
    {
        public Boolean IsLock { get; set; }       
    }
}
