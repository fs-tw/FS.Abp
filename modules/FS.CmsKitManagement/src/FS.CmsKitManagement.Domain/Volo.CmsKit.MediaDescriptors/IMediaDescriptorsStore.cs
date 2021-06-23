using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.CmsKit.MediaDescriptors;

namespace Volo.CmsKit.MediaDescriptors
{
    public interface IMediaDescriptorsStore
    {
        Task<List<MediaDescriptor>> GetMediaDescriptorsAsync(List<Guid> mediaDescriptorIds);
    }
}
