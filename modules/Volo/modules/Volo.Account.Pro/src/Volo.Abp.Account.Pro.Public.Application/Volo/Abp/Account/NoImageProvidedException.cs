using System.Runtime.Serialization;

namespace Volo.Abp.Account
{
    public class NoImageProvidedException : BusinessException
    {
        public NoImageProvidedException()
        {
            Code = AccountProErrorCodes.NoImageProvided;
        }
        
        public NoImageProvidedException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {
            
        }
    }
}