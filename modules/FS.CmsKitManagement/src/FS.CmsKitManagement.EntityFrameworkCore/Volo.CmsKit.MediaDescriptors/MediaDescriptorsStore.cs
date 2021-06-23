using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace Volo.CmsKit.MediaDescriptors
{

    public class MediaDescriptorsStore : DomainService, IMediaDescriptorsStore
    {
        private IMediaDescriptorRepository MediaDescriptorRepository => this.LazyServiceProvider.LazyGetRequiredService<IMediaDescriptorRepository>();

        public async Task<List<MediaDescriptor>> GetMediaDescriptorsAsync(List<Guid> mediaDescriptorIds)
        {
            var result = new List<MediaDescriptor>();
            foreach(var id in mediaDescriptorIds)
            {
                var item = await this.MediaDescriptorRepository.GetAsync(id);
                result.Add(item);
            }

            return result;
        }

    }
}
