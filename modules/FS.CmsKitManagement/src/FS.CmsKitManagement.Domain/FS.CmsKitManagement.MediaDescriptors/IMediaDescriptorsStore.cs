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

        Task<AttachmentMedia> CreateAsync<T>(T entity, MediaDescriptor mediaDescriptor)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;

    }
}
