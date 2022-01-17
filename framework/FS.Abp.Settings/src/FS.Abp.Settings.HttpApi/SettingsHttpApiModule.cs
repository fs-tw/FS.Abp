﻿using Localization.Resources.AbpUi;
using FS.Abp.Settings.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Abp.Settings
{
    [DependsOn(
        typeof(SettingsApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class SettingsHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(SettingsHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<SettingsResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
