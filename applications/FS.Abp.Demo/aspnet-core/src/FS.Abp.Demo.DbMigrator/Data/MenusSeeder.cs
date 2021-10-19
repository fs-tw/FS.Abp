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
        public string Name { get; set; }
        public string Value { get; set; }
        public int Sequence { get; set; }
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
        protected IEntityBlogsStore EntityBlogsStore => this.LazyServiceProvider.LazyGetRequiredService<IEntityBlogsStore>();
        protected IContentsStore ContentsStore => this.LazyServiceProvider.LazyGetRequiredService<IContentsStore>();

        protected override async Task SeedAsync(DataSeedContext context)
        {
            List<MenuItem> menuItems = new List<MenuItem>();
            List<Page> pages = new List<Page>();
            List<Blog> blogs = new List<Blog>();
            List<EntityBlog> entityBlogs = new List<EntityBlog>();
            

            await processMenuAsync();
            await MenuItemRepository.InsertManyAsync(menuItems, true);
            await PageRepository.InsertManyAsync(pages, true);
            await BlogRepository.InsertManyAsync(blogs, true);
            await EntityBlogsStore.EntityBlog.InsertManyAsync(entityBlogs, true);


            List<EntityContentDefinition> entityContentDefinitionList = new List<EntityContentDefinition>();
            await processPageContentAsync();
            await this.ContentsStore.EntityContentDefinition.InsertManyAsync(entityContentDefinitionList, true);

            async Task processMenuAsync()
            {
                var existedDatasCount = await MenuItemRepository.GetCountAsync();
                if (existedDatasCount > 0)
                    return;

                var MenuList = VirtualFileNpoiReader.ReadToTreeNode<MenuInfo>(Options.FileName, Options.MenusSheetName);

                await createMenuItemWithPageAsync(MenuList);

                var tt = menuItems.Where(x => x.Url.IsNullOrWhiteSpace()).ToList();




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
                                EntityBlog entityBlog = await EntityBlogsStore.CreateEntityBlogAsync(page, blog);
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
                var existedDatasCount = await ContentsStore.EntityContentDefinition.GetCountAsync();
                if (existedDatasCount > 0)
                    return;

                var PageContentList = VirtualFileNpoiReader.Read<PageContentInfo>(Options.FileName, Options.PageContentSheetName);
                
                var PageContentDefinitionList = PageContentList.GroupBy(x => new { x.PageSlug, x.ContentDefinitionDisplayName }).ToList();
                foreach (var item in PageContentDefinitionList)
                {

                    Page page = pages.Where( x => x.Slug == item.Key.PageSlug).Single();
                    ContentDefinition contentDefinition = (await this.ContentsStore.ContentDefinition.WithDetailsAsync())
                        .Where(x => x.DisplayName == item.Key.ContentDefinitionDisplayName)
                        .Single();
                    EntityContentDefinition entityContentDefinition = await ContentsStore.CreateEntityContentDefinitionAsync(page, contentDefinition);
                    List<EntityContent> entityContents = new List<EntityContent>();
                    
                    var contentList = item.ToList().GroupBy(x=>x.Sequence).ToList();
                    foreach(var content in contentList)
                    {
                        var entityContent = await ContentsStore.CreateEntityContentAsync(page, entityContentDefinition, content.Key);

                        try
                        {
                            List<ContentProperty> contentProperties = contentDefinition.ContentProperties.OrderBy(x => x.Sequence).ToList();
                            
                            entityContent.Properties = (contentProperties.Zip(content.ToList(), (x, y) =>
                            {
                                if (x.DisplayName != y.Name)
                                {
                                    Exception e = new Exception($"ContentProperty錯誤,DB-ContentProperty:{x.DisplayName},Excel-ContentProperty:{y.Name}");
                                    throw e;
                                }
                                return new Volo.Abp.NameValue(x.DisplayName, y.Value);
                            })).ToList();

                            entityContents.Add(entityContent);
                        }
                        catch (Exception e)
                        {

                        }
                        
                    }
                    entityContentDefinition.EntityContents = entityContents;
                    entityContentDefinitionList.Add(entityContentDefinition);
                }
            }
        }
    }
}
