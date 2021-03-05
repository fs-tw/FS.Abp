using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;

namespace FS.Abp.AutoMapper
{
    [DependsOn(typeof(Volo.Abp.AutoMapper.AbpAutoMapperModule))]
    public class AbpAutoMapperModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.Configurators.Add(x =>
                {
                    x.MapperConfiguration.ForAllMaps((y, expression) =>
                    {
                        var flags = BindingFlags.Public | BindingFlags.Instance;
                        var sourceType = y.SourceType;
                        var destinationProperties = y.DestinationType.GetProperties(flags).Select(x => x.Name);
                        var sourceProperties = sourceType.GetProperties(flags).Select(x => x.Name);
                        foreach (var property in destinationProperties)
                        {
                            if (sourceType.GetProperty(property, flags) == null)
                            {
                                expression.ForMember(property, opt => opt.Ignore());
                            }
                        }
                    });
                });
            });
        }
    }
}
