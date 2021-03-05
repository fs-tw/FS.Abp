using Microsoft.Extensions.Logging;
using System;
using Volo.Abp;

namespace FS.Abp.File.Directories
{
    [Serializable]
    public class DirectoryProviderDefinitionNotTaggableException : BusinessException
    {
        public DirectoryProviderDefinitionNotTaggableException(
            string code = null,
            string message = null,
            string details = null,
            Exception innerException = null,
            LogLevel logLevel = LogLevel.Warning) 
            : base(code, message, details, innerException, logLevel)
        {
        }

        public DirectoryProviderDefinitionNotTaggableException(string no) 
        {
            //Code = CmsKitErrorCodes.Tags.EntityNotTaggable;
            //WithData(nameof(Tag.EntityType), no);
        }
    }
}
