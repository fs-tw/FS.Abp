using FS.Abp.Npoi.Mapper;
using FS.Abp.Npoi.Mapper.Attributes;
using FS.CmsKitManagement.Contents;
using FS.CmsKitManagement.EntityBlogs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.Menus;
using Volo.CmsKit.Pages;

namespace FS.Abp.Demo.DbMigrator.Data
{
    public class MenusSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; }
        public string MenusSheetName { get; set; }
        public string PageContentSheetName { get; set; }
    }
    [LevelStartAt(5)]
    public class MenuInfo : FS.Abp.Npoi.Mapper.ITreeNode<MenuInfo>
    {
        public List<MenuInfo> Children { get; set; }
        public string DisplayName { get; set; }
        public string EntityType { get; set; }
        public string Url { get; set; }
        public string Slug { get; set; }
        public string Code { get; set; }
    }
    public class PageContentInfo
    {
        public string PageSlug { get; set; }
        public string ContentDefinitionDisplayName { get; set; }
    }

    public class MenusSeeder : FS.Abp.Data.Seeder<MenusSeederOptions>, ITransientDependency
    {
        protected IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();
        protected IMenuItemRepository MenuItemRepository => this.LazyServiceProvider.LazyGetRequiredService<IMenuItemRepository>();
        protected MenuItemManager MenuItemManager => this.LazyServiceProvider.LazyGetRequiredService<MenuItemManager>();
        protected IPageRepository PageRepository => this.LazyServiceProvider.LazyGetRequiredService<IPageRepository>();
        protected PageManager PageManager => this.LazyServiceProvider.LazyGetRequiredService<PageManager>();
        protected IBlogRepository BlogRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogRepository>();
        protected BlogManager BlogManager => this.LazyServiceProvider.LazyGetRequiredService<BlogManager>();
        protected IEntityBlogRepository EntityBlogRepository => this.LazyServiceProvider.LazyGetRequiredService<IEntityBlogRepository>();
        protected IContentDefinitionRepository ContentDefinitions => this.LazyServiceProvider.LazyGetRequiredService<IContentDefinitionRepository>();
        protected IEntityContentDefinitionRepository EntityContentDefinitionRepository => this.LazyServiceProvider.LazyGetRequiredService<IEntityContentDefinitionRepository>();

        protected override async Task SeedAsync(DataSeedContext context)
        {
            await processMenuAsync();

            //await processPageContentAsync();

            async Task processMenuAsync()
            {
                var existedDatasCount = await MenuItemRepository.GetCountAsync();
                if (existedDatasCount > 0)
                    return;

                var MenuList = VirtualFileNpoiReader.ReadToTreeNode<MenuInfo>(Options.FileName, Options.MenusSheetName);
                List<MenuItem> menuItems = new List<MenuItem>();
                List<Page> pages = new List<Page>();
                List<Blog> blogs = new List<Blog>();
                List<EntityBlog> entityBlogs = new List<EntityBlog>();
                await createMenuItemWithPageAsync(MenuList);

                var tt = menuItems.Where(x => x.Url.IsNullOrWhiteSpace()).ToList();

                await MenuItemRepository.InsertManyAsync(menuItems);
                await PageRepository.InsertManyAsync(pages);
                await BlogRepository.InsertManyAsync(blogs);
                await EntityBlogRepository.InsertManyAsync(entityBlogs);


                async Task createMenuItemWithPageAsync(List<MenuInfo> datas, Guid? partntId = null)
                {
                    foreach (var item in datas)
                    {
                        MenuItem menuItem = null;
                        Page page = null;
                        switch (item.EntityType)
                        {
                            case "Link":
                                menuItem = new MenuItem(GuidGenerator.Create(), item.DisplayName, item.Url, parentId: partntId);
                                break;
                            case "Page":
                                menuItem = new MenuItem(GuidGenerator.Create(), item.DisplayName, "url", parentId: partntId);
                                page = await PageManager.CreateAsync(title: item.DisplayName, slug: item.Slug);
                                MenuItemManager.SetPageUrl(menuItem, page);
                                pages.Add(page);
                                break;
                            case "Blog":
                                menuItem = new MenuItem(GuidGenerator.Create(), item.DisplayName, "url", parentId: partntId);
                                page = await PageManager.CreateAsync(title: item.DisplayName, slug: item.Slug);
                                MenuItemManager.SetPageUrl(menuItem, page);
                                pages.Add(page);

                                Blog blog = await BlogManager.CreateAsync(item.DisplayName, item.Slug);
                                blogs.Add(blog);

                                EntityBlog entityBlog = new EntityBlog()
                                {
                                    EntityType = "Page",
                                    EntityId = page.Id.ToString(),
                                    BlogId = blog.Id
                                };
                                entityBlogs.Add(entityBlog);
                                break;
                            default:
                                break;
                        }
                        menuItems.Add(menuItem);

                        if (item.Children.Count != 0)
                        {
                            await createMenuItemWithPageAsync(item.Children, menuItem.Id);
                        }
                    }
                }
            }

            async Task processPageContentAsync()
            {
                var existedDatasCount = await EntityContentDefinitionRepository.GetCountAsync();
                if (existedDatasCount > 0)
                    return;

                var PageContentList = VirtualFileNpoiReader.Read<PageContentInfo>(Options.FileName, Options.PageContentSheetName);
                List<EntityContentDefinition> entityContentDefinitionList = new List<EntityContentDefinition>();
                var a = PageContentList.GroupBy(x => new { x.PageSlug, x.ContentDefinitionDisplayName }).ToList();
                var a2 = PageContentList.GroupBy(x => new { x.PageSlug ,x.ContentDefinitionDisplayName}).ToArray();
                foreach (var item in PageContentList)
                {
                    Page page = await this.PageRepository.GetBySlugAsync(item.PageSlug);
                    ContentDefinition contentDefinition = await this.ContentDefinitions.GetAsync(x => x.DisplayName == item.ContentDefinitionDisplayName);
                    EntityContentDefinition entityContentDefinition = new EntityContentDefinition()
                    {
                        EntityType = "Page",
                        EntityId = page.Id.ToString(),
                        ContentDefinitionId = contentDefinition.Id
                    };
                    entityContentDefinitionList.Add(entityContentDefinition);
                }
                await this.EntityContentDefinitionRepository.InsertManyAsync(entityContentDefinitionList);
            }
        }
    }
}
