using System.Runtime.Serialization;
using JetBrains.Annotations;
using Volo.Abp;

namespace Volo.FileManagement.Files
{
    public class NotEnoughStorageSizeException : BusinessException
    {
        public NotEnoughStorageSizeException([NotNull]string total, [NotNull] string remaining)
        {
            Code = FileManagementErrorCodes.NotEnoughStorageSize;
            WithData("StorageSize", total).WithData("RemainingSize", remaining);
        }
        
        public NotEnoughStorageSizeException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {

        }
    }
}