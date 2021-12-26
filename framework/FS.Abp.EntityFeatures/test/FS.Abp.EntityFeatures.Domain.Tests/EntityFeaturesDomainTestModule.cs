﻿using FS.Abp.EntityFeatures.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityFeatures
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(EntityFeaturesEntityFrameworkCoreTestModule)
        )]
    public class EntityFeaturesDomainTestModule : AbpModule
    {
        
    }
}
