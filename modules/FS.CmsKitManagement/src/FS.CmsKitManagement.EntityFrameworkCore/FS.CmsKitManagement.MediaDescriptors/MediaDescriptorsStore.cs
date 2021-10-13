using FS.Abp.EntityTypes;
using JetBrains.Annotations;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.CmsKit.MediaDescriptors;

namespace FS.CmsKitManagement.MediaDescriptors
{
    public partial class MediaDescriptorsStore: IMediaDescriptorsStore
    {
        protected IOptions<EntityTypeOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityTypeOptions>>();
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

        public async Task<AttachmentMedia> CreateAsync<T>(T entity, MediaDescriptor mediaDescriptor)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var options = Options.Value;

            return new AttachmentMedia(GuidGenerator.Create())
            {
                MediaDescriptorId = mediaDescriptor.Id,
                EntityType = options.GetOrDefault<AttachmentMedia>().GetOrDefault<T>().EntityType,
                EntityId = entity.Id.ToString(),
                TenantId = CurrentTenant.Id
            };
        }
    }
}
