using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Octokit;
using Volo.Abp.Autofac;
using Volo.Abp.Cli;
using FS.Abp.Cli.Commands;
using Volo.Abp.Modularity;

namespace FS.Abp.Cli
{
    [DependsOn(
        typeof(AbpCliCoreModule),
        typeof(AbpAutofacModule)
    )]
    public class AbpCliModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddSingleton<IGitHubClient>(x=> 
            {
                var opt = x.GetService<IOptions<OctokitOptions>>();
                return new GitHubClient(new Octokit.ProductHeaderValue(opt.Value.ProductHeaderName));
            });

            Configure<OctokitOptions>(options =>
            {
                options.ProductHeaderName = "FurtherSoftware";
                options.OwnerName = "FurtherSoftware";
                options.RepositoryName = "abp";
                options.BranchName = "develop";
            });

            Configure<AbpCliOptions>(options =>
            {
                options.Commands["rename"] = typeof(ReNameCommand);
            });

        }

    }
}