using FS.Cms.Posts;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace FS.Cms.Host.HttpApi
{
    [DependsOn(
        typeof(FS.Cms.CmsApplicationModule),
        typeof(FS.Cms.CmsHttpApiModule),
        typeof(FS.Cms.EntityFrameworkCore.CmsEntityFrameworkCoreModule),
        typeof(FS.Abp.Host.HttpApi.AbpHttpApiHostModule)
        )]
    public class CmsHttpApiHostModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            //context.Services.AddJsonSubtypesConverterProfile<EpsyApplicationModule>();
            //Configure<AbpAspNetCoreMvcOptions>(options =>
            //{
            //    options.ConventionalControllers.Create(
            //        typeof(FS.Cms.CmsApplicationModule).Assembly,
            //        action =>
            //        {                        
            //            action.TypePredicate = (t) =>
            //            {
            //                return false;
            //            };
            //            //var oldAction = action.UrlActionNameNormalizer;
            //            //action.RootPath = "Cms";
            //            //action.TypePredicate = (t) =>
            //            //{
            //            //    if (typeof(PostTagCrudAppService) == t)
            //            //        return false;
            //            //    return true;
            //            //};
            //            //action.UrlActionNameNormalizer = (x) =>
            //            //{
            //            //    return x.ActionNameInUrl;
            //            //};
            //            //action.UrlControllerNameNormalizer = (x) =>
            //            //{
            //            //    if (x.ControllerName == "PostTagCrud")
            //            //    {
            //            //        return "";
            //            //    };
            //            //    return x.ControllerName;
            //            //};
            //        });
            //});
        }
    }
}
