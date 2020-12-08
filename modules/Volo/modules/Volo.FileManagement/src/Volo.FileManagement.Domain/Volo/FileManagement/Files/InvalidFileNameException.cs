using System;
using System.Runtime.Serialization;
using JetBrains.Annotations;
using Volo.Abp;

namespace Volo.FileManagement.Files
{
    [Serializable]
    public class InvalidFileNameException : BusinessException
    {
        public InvalidFileNameException([NotNull]string fileName)
        {
            Code = FileManagementErrorCodes.InvalidFileName;
            WithData("FileName", fileName);
        }
        
        public InvalidFileNameException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {
            
        }
    }
}