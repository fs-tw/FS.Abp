using FS.Abp.EntityTypes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Volo.CmsKit.Blogs
{
    [EntityDefinition(
        EntityType = typeof(Blog),
        AppServiceType = typeof(Admin.Blogs.BlogAdminAppService),
        ListType = typeof(Admin.Blogs.BlogDto),
        SearchType = typeof(Admin.Blogs.BlogGetListInput),
        CreateType = typeof(Admin.Blogs.CreateBlogDto),
        UpdateType = typeof(Admin.Blogs.UpdateBlogDto)
    )]
    public class BlogAdminAppServiceMetadata : IMetadataProvider<Admin.Blogs.BlogAdminAppService>
    {

    }

    public class BlogDtoMetadata : IMetadataProvider<Admin.Blogs.BlogDto>
    {
        [EntityPropertyDefinition(
            Visible = false)]
        public Guid Id { get; set; }

        [EntityPropertyDefinition(
            DisplayName = "CmsKit::Name",
            Sortable = true
        )]
        public string Name { get; set; }

        [EntityPropertyDefinition(
            DisplayName = "CmsKit::Slug",
            Sortable = true
        )]
        public string Slug { get; set; }
    }

    public class CreateBlogDtoMetadata : IMetadataProvider<Admin.Blogs.CreateBlogDto>
    {
    }


}
