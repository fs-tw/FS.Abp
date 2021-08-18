﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating AbpSettings.
// 4.4.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Domain.Services;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using FS.Abp.SettingManagement;
using Volo.Abp.Localization;
using Volo.Abp.Settings;
using Volo.Abp.SettingManagement;
using FS.Localization;
using System.Collections.Generic;
using System;

namespace FS.Settings
{
    public partial class FSSettingNames
    {
        public partial class DemoSettings
        {
            private const string Prefix = "FS.Settings.DemoSettings";
            public const string Name = Prefix + ".Name";
            public const string Title = Prefix + ".Title";
            public const string EndTime = Prefix + ".EndTime";
            public const string Status = Prefix + ".Status";
        }
    }
    public partial class DemoSettingsSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            context.Add(
                        new SettingDefinition(FSSettingNames.DemoSettings.Name, @"", L("DisplayName:DemoSettings.Name"), L("Description:DemoSettings.Name"), false).WithProperty("Type","String"),
                        new SettingDefinition(FSSettingNames.DemoSettings.Title, @"", L("DisplayName:DemoSettings.Title"), L("Description:DemoSettings.Title"), false).WithProperty("Type","String"),
                        new SettingDefinition(FSSettingNames.DemoSettings.EndTime, @"", L("DisplayName:DemoSettings.EndTime"), L("Description:DemoSettings.EndTime"), false).WithProperty("Type","DateTime"),
                        new SettingDefinition(FSSettingNames.DemoSettings.Status, @"", L("DisplayName:DemoSettings.Status"), L("Description:DemoSettings.Status"), false).WithProperty("Type","Status")
                        );
        }
        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<FSResource>(name);
        }
    }
    public partial interface IDemoSettingsFactory : IFactory<DemoSettings>, ITransientDependency { }
    public partial class DemoSettingsFactory : Factory<DemoSettings>, IDemoSettingsFactory
    {
        public override async Task<DemoSettings> GetAsync(string providerName = null, string providerKey = null, bool fallback = true)
        {
            var result = new DemoSettings();
            result.Name = await this.TryGetAsync(FSSettingNames.DemoSettings.Name, providerName, providerKey, fallback);
            result.Title = await this.TryGetAsync(FSSettingNames.DemoSettings.Title, providerName, providerKey, fallback);
            result.EndTime = await this.TryGetAsync(FSSettingNames.DemoSettings.EndTime, providerName, providerKey, result.EndTime, fallback);
            result.Status = await this.TryGetAsync(FSSettingNames.DemoSettings.Status, providerName, providerKey, result.Status, fallback);
            return result;
        }

        public override async Task SetAsync(DemoSettings input, string providerName, string providerKey, bool forceToSet = false)
        {
            await this.TrySetAsync(FSSettingNames.DemoSettings.Name, input.Name.ToString(), providerName, providerKey, forceToSet);
            await this.TrySetAsync(FSSettingNames.DemoSettings.Title, input.Title.ToString(), providerName, providerKey, forceToSet);
            await this.TrySetAsync(FSSettingNames.DemoSettings.EndTime, input.EndTime.ToString(), providerName, providerKey, forceToSet);
            await this.TrySetAsync(FSSettingNames.DemoSettings.Status, input.Status.ToString(), providerName, providerKey, forceToSet);
        }
    }
}
