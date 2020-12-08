using System;
using System.Runtime.Serialization;
using JetBrains.Annotations;
using Volo.Abp;

namespace Volo.FileManagement.Directories
{
    [Serializable]
    public class InvalidDirectoryNameException : BusinessException
    {
        public InvalidDirectoryNameException([NotNull] string directoryName)
        {
            Code = FileManagementErrorCodes.InvalidDirectoryName;
            WithData("DirectoryName", directoryName);
        }
        
        public InvalidDirectoryNameException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {
            
        }
    }
}