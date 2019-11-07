using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Modularity;

namespace FS.Abp.AutoMapper
{
    [DependsOn(typeof(Volo.Abp.AutoMapper.AbpAutoMapperModule))]
    public class AbpAutoMapperModule : AbpModule
    {
    }
}
