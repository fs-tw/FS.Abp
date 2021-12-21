using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using FS.Abp.Demo.MultiTenancy;
using Volo.Abp.AuditLogging;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Emailing;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement.Identity;
using Volo.Abp.PermissionManagement.IdentityServer;
using Volo.Abp.SettingManagement;
using Volo.Abp.TenantManagement;
using FS.Abp.EntityFeatures;

namespace FS.Abp.Demo
{
    [DependsOn(
        typeof(DemoDomainSharedModule),
        typeof(AbpAuditLoggingDomainModule),
        typeof(AbpBackgroundJobsDomainModule),
        typeof(AbpFeatureManagementDomainModule),
        typeof(AbpIdentityDomainModule),
        typeof(AbpPermissionManagementDomainIdentityModule),
        typeof(AbpIdentityServerDomainModule),
        typeof(AbpPermissionManagementDomainIdentityServerModule),
        typeof(AbpSettingManagementDomainModule),
        typeof(AbpTenantManagementDomainModule),
        typeof(AbpEmailingModule)
    )]
    [DependsOn(
        typeof(FS.CmsKitManagement.CmsKitManagementDomainModule)
        //typeof(FS.CodingManagement.CodingManagementDomainModule)
        )]
    public class DemoDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpMultiTenancyOptions>(options =>
            {
                options.IsEnabled = MultiTenancyConsts.IsEnabled;
            });

            Configure<EntityFeaturesOptions>(options =>
            {
                options.GetOrAdd<Volo.CmsKit.Reactions.UserReaction>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityFeatureDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                    a.AddOrReplace<Volo.CmsKit.Comments.Comment>(new DefaultEntityFeatureDefinition(Volo.CmsKit.Comments.CommentConsts.EntityType));
                });

                options.GetOrAdd<Volo.CmsKit.Ratings.Rating>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityFeatureDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                });

                options.GetOrAdd<Volo.CmsKit.Tags.Tag>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityFeatureDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                });

                options.GetOrAdd<Volo.CmsKit.MediaDescriptors.MediaDescriptor>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Pages.Page>(new DefaultEntityFeatureDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityFeatureDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                });

                options.GetOrAdd<Volo.CmsKit.Comments.Comment>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityFeatureDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                });

                options.GetOrAdd<FS.CmsKitManagement.EntityBlogs.EntityBlog>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Pages.Page>(DefaultEntityFeatureDefinition.Default<Volo.CmsKit.Pages.Page>());
                });

                options.GetOrAdd<FS.CmsKitManagement.MediaDescriptors.AttachmentMedia>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Pages.Page>(DefaultEntityFeatureDefinition.Default<Volo.CmsKit.Pages.Page>());
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(DefaultEntityFeatureDefinition.Default<Volo.CmsKit.Blogs.BlogPost>());
                });

                options.GetOrAdd<FS.CmsKitManagement.Contents.ContentDefinition>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Pages.Page>(DefaultEntityFeatureDefinition.Default<Volo.CmsKit.Pages.Page>());
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(DefaultEntityFeatureDefinition.Default<Volo.CmsKit.Blogs.BlogPost>());
                });

                options.GetOrAdd<FS.CmsKitManagement.Shapes.Shape>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Pages.Page>(DefaultEntityFeatureDefinition.Default<Volo.CmsKit.Pages.Page>());
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(DefaultEntityFeatureDefinition.Default<Volo.CmsKit.Blogs.BlogPost>());
                });
            });

#if DEBUG
            context.Services.Replace(ServiceDescriptor.Singleton<IEmailSender, NullEmailSender>());
#endif
        }
    }
}
