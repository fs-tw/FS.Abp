using System;
using System.Runtime.Serialization;
using Volo.Abp;

namespace Volo.FileManagement.Directories
{
    [Serializable]
    public class InvalidMoveException : BusinessException
    {
        public InvalidMoveException()
        {
            Code = FileManagementErrorCodes.CantMovableToUnderChild;
        }
        
        public InvalidMoveException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {
            
        }
    }
}