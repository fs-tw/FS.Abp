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
using FS.Abp.EntityTypes;

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
        typeof(FS.CmsKitManagement.CmsKitManagementDomainModule),
        typeof(FS.CodingManagement.CodingManagementDomainModule)
        )]
    [DependsOn(
        typeof(FS.Abp.EntityTypes.EntityTypesDomainModule)
        )]
    public class DemoDomainModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<EntityTypeOption>(options =>
            {
                options.Entity<Volo.CmsKit.Reactions.UserReaction>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityTypeDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                    a.AddOrReplace<Volo.CmsKit.Comments.Comment>(new DefaultEntityTypeDefinition(Volo.CmsKit.Comments.CommentConsts.EntityType));
                });

                options.Entity<Volo.CmsKit.Ratings.Rating>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityTypeDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                });

                options.Entity<Volo.CmsKit.Tags.Tag>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityTypeDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                });

                options.Entity<Volo.CmsKit.MediaDescriptors.MediaDescriptor>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Pages.Page>(new DefaultEntityTypeDefinition(Volo.CmsKit.Pages.PageConsts.EntityType));
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityTypeDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                });

                options.Entity<Volo.CmsKit.Comments.Comment>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>(new DefaultEntityTypeDefinition(Volo.CmsKit.Blogs.BlogPostConsts.EntityType));
                });

                options.Entity<FS.CmsKitManagement.EntityBlogs.EntityBlog>(a =>
                {
                    a.AddOrReplaceDefaults(
                        typeof(Volo.CmsKit.Pages.Page)
                        );
                });

                options.Entity<FS.CmsKitManagement.MediaDescriptors.AttachmentMedia>(a =>
                {
                    a.AddOrReplaceDefaults(
                        typeof(Volo.CmsKit.Pages.Page),
                        typeof(Volo.CmsKit.Blogs.BlogPost)
                        );
                });

                options.Entity<FS.CmsKitManagement.Contents.ContentDefinition>(a =>
                {
                    a.AddOrReplaceDefaults(
                        typeof(Volo.CmsKit.Pages.Page),
                        typeof(Volo.CmsKit.Blogs.BlogPost)
                        );
                });

                options.Entity<FS.CmsKitManagement.MultiLinguals.MultiLingual>(a =>
                {
                    a.AddOrReplaceDefaults(
                        typeof(Volo.CmsKit.Pages.Page),
                        typeof(Volo.CmsKit.Blogs.Blog),
                        typeof(Volo.CmsKit.Blogs.BlogPost),
                        typeof(Volo.CmsKit.Menus.MenuItem)
                        );
                });

                options.Entity<FS.CmsKitManagement.Shapes.Shape>(a =>
                {
                    a.AddOrReplaceDefaults(
                        typeof(Volo.CmsKit.Pages.Page),
                        typeof(Volo.CmsKit.Blogs.BlogPost)
                        );
                });
            });
        }
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpMultiTenancyOptions>(options =>
            {
                options.IsEnabled = MultiTenancyConsts.IsEnabled;
            });

            Configure<EntityTypeOption>(options =>
            {
                context.Services.ExecutePreConfiguredActions(options);
            });

#if DEBUG
            context.Services.Replace(ServiceDescriptor.Singleton<IEmailSender, NullEmailSender>());
#endif
        }
    }
}
