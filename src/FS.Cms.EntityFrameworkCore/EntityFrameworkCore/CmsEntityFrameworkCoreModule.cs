﻿using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Cms.EntityFrameworkCore
{
    [DependsOn(
        typeof(CmsDomainModule),
        typeof(AbpEntityFrameworkCoreModule),
        typeof(FS.Abp.EntityFrameworkCore.AbpEntityFrameworkCoreModule)
    )]
    public class CmsEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<CmsDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}