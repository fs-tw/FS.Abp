using System;
using System.Runtime.Serialization;
using JetBrains.Annotations;
using Volo.Abp;

namespace Volo.FileManagement.Directories
{
    [Serializable]
    public class DirectoryAlreadyExistException : BusinessException
    {
        public DirectoryAlreadyExistException([NotNull] string directoryName)
        {
            Code = FileManagementErrorCodes.DirectoryAlreadyExist;
            WithData("DirectoryName", directoryName);
        }
        
        public DirectoryAlreadyExistException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {
            
        }
    }
}