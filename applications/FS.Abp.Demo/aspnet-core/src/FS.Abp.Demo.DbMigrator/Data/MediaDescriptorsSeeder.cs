using FS.Abp.Npoi.Mapper;
using FS.CmsKitManagement.MediaDescriptors;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.BlobStoring;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.VirtualFileSystem;
using Volo.CmsKit.Comments;
using Volo.CmsKit.MediaDescriptors;
using Volo.CmsKit.Pages;

namespace FS.Abp.Demo.DbMigrator.Data
{
    public class MediaDescriptorsSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; }
        public string SheetName { get; set; }
        public string MediaDirectoryPath { get; set; }
    }
    public class MediaDescriptorsInfo
    {
        public string PageSlug { get; set; }
        public string FileName { get; set; }
    }

    public class MediaDescriptorsSeeder : FS.Abp.Data.Seeder<MediaDescriptorsSeederOptions>, ITransientDependency
    {
        protected IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();
        private IVirtualFileProvider VirtualFileProvider => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileProvider>();
        protected IMediaDescriptorRepository MediaDescriptorRepository => this.LazyServiceProvider.LazyGetRequiredService<IMediaDescriptorRepository>();
        protected MediaDescriptorManager MediaDescriptorManager => this.LazyServiceProvider.LazyGetRequiredService<MediaDescriptorManager>();
        private IBlobContainer<MediaContainer> BlobContainer => this.LazyServiceProvider.LazyGetRequiredService<IBlobContainer<MediaContainer>>();
        protected IPageRepository PageRepository => this.LazyServiceProvider.LazyGetRequiredService<IPageRepository>();
        protected IMediaDescriptorsStore MediaDescriptorsStore => this.LazyServiceProvider.LazyGetRequiredService<IMediaDescriptorsStore>();
        protected IOptions<CmsKitMediaOptions> options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<CmsKitMediaOptions>>();
        protected override async Task SeedAsync(DataSeedContext context)
        {
            var existedDatasCount = await MediaDescriptorRepository.GetCountAsync();
            if (existedDatasCount > 0)
                return;
            foreach (var file in VirtualFileProvider.GetDirectoryContents(Options.MediaDirectoryPath))
            {
                var mimeType = Utils.FileExtensionContentTypeUtils.GetMimeType(System.IO.Path.GetExtension(file.Name));

                var isDefined = options.Value.EntityTypes.Any(
                    a => a.EntityType.Equals(PageConsts.EntityType, StringComparison.InvariantCultureIgnoreCase)
                );

                MediaDescriptor img = await MediaDescriptorManager.CreateAsync(
                    PageConsts.EntityType,
                    System.IO.Path.GetFileNameWithoutExtension(file.Name),
                    mimeType,
                    file.Length);

                await BlobContainer.SaveAsync(img.Id.ToString(), file.CreateReadStream(), true);
            }

            var mediaDescriptorList = VirtualFileNpoiReader.Read<MediaDescriptorsInfo>(Options.FileName, Options.SheetName);
            List<AttachmentMedia> attachmentMediaList = new List<AttachmentMedia>();
            var mediaDescriptors = await MediaDescriptorRepository.GetListAsync();
            foreach (var item in mediaDescriptorList)
            {
                Page page = await PageRepository.GetBySlugAsync(item.PageSlug);
                MediaDescriptor mediaDescriptor = mediaDescriptors.Where(x => x.Name == item.FileName).Single();
                AttachmentMedia attachmentMedia = await MediaDescriptorsStore.CreateAttachmentMediaAsync(page, mediaDescriptor);
                attachmentMediaList.Add(attachmentMedia);
            }
            await MediaDescriptorsStore.AttachmentMedia.InsertManyAsync(attachmentMediaList,true);
        }
    }
}
