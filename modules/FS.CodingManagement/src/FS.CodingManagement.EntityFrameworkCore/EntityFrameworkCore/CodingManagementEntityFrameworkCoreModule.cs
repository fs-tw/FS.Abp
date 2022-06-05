using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.Abp.EntityFrameworkCore.DependencyInjection;

namespace FS.CodingManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(CodingManagementDomainModule)
    )]
    [DependsOn(typeof(FS.Coding.Codes.EntityFrameworkCore.CodesEntityFrameworkCoreModule))]
    public class CodingManagementEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<CodingManagementDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
                options.AddDefaultTreeRepositories();
            });
        }
    }
}