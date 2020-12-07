using System;
using System.Runtime.Serialization;
using Volo.Abp;

namespace Volo.FileManagement.Directories
{
    [Serializable]
    public class DirectoryNotExistException : BusinessException
    {
        public DirectoryNotExistException()
        {
            Code = FileManagementErrorCodes.DirectoryNotExist;
        }
        
        public DirectoryNotExistException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {
            
        }
    }
}