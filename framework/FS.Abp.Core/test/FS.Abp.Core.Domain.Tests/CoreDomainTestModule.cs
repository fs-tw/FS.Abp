﻿using FS.Abp.Core.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.Core
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(CoreEntityFrameworkCoreTestModule)
        )]
    public class CoreDomainTestModule : AbpModule
    {
        
    }
}
