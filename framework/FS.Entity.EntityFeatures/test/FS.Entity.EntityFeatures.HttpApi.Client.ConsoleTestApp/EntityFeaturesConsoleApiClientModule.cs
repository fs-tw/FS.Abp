﻿using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Entity.EntityFeatures;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(EntityFeaturesHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class EntityFeaturesConsoleApiClientModule : AbpModule
{

}
