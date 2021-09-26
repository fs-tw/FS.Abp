using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.CmsKit.MediaDescriptors;

namespace FS.CmsKitManagement.MediaDescriptors
{
    public partial class MediaDescriptorsStore
    {
        private IMediaDescriptorRepository MediaDescriptorRepository => this.LazyServiceProvider.LazyGetRequiredService<IMediaDescriptorRepository>();

        public async Task<List<MediaDescriptor>> GetMediaDescriptorsAsync(List<Guid> mediaDescriptorIds)
        {
            var result = new List<MediaDescriptor>();
            foreach (var id in mediaDescriptorIds)
            {
                var item = await this.MediaDescriptorRepository.GetAsync(id);
                result.Add(item);
            }

            return result;
        }

        public async Task AddAttachmentToEntityAsync(
            [NotNull] Guid mediaDescriptorId,
            [NotNull] string entityType,
            [NotNull] string entityId
            )
        {
            //check entity is existed
            var item = await this.MediaDescriptorRepository.GetAsync(mediaDescriptorId);

            await this.AttachmentMedia.InsertAsync(
                new AttachmentMedia(GuidGenerator.Create())
                {
                    EntityType = entityType,
                    EntityId = entityId,
                    MediaDescriptorId = item.Id
                });
        }
    }
}
