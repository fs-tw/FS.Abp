using FS.Abp.EntityTypes;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp.Modularity;
using Volo.Abp.Reflection;

namespace FS.Abp.Demo
{
    [DependsOn(
        typeof(DemoApplicationModule),
        typeof(DemoDomainTestModule)
        )]
    public class DemoApplicationTestModule : AbpModule
    {
        public static Volo.Abp.Collections.TypeList list = new Volo.Abp.Collections.TypeList();
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

        }
    }
}