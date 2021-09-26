using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.CmsKit.MediaDescriptors;

namespace FS.CmsKitManagement.MediaDescriptors
{
    public partial interface IMediaDescriptorsStore
    {
        Task<List<MediaDescriptor>> GetMediaDescriptorsAsync(List<Guid> mediaDescriptorIds);

        public Task AddAttachmentToEntityAsync([NotNull] Guid mediaDescriptorId, [NotNull] string entityType, [NotNull] string entityId);
    }
}
