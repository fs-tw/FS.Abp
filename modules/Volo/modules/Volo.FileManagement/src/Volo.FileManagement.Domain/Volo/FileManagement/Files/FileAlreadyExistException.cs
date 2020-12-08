using System;
using System.Runtime.Serialization;
using JetBrains.Annotations;
using Volo.Abp;

namespace Volo.FileManagement.Files
{
    [Serializable]
    public class FileAlreadyExistException : BusinessException
    {
        public FileAlreadyExistException([NotNull]string fileName)
        {
            Code = FileManagementErrorCodes.FileAlreadyExist;
            WithData("FileName", fileName);
        }
        
        public FileAlreadyExistException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {

        }
    }
}