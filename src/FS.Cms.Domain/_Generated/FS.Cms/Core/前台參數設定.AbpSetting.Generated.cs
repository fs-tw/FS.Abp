﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating AbpSettings.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Localization;
using Volo.Abp.Options;
using Volo.Abp.Settings;
using Volo.Abp.Threading;
using FS.Abp.Shared;
using FS.Abp.SettingManagement;
using FS.Cms.Localization;


namespace FS.Cms.Core
{
    public partial class CmsSettingNames
    {
        public partial class 前台參數設定
        {
            private const string Prefix = "FS.Cms.Core.前台參數設定";
            public const string Url = Prefix + ".Url";
        }
    }
    public partial class 前台參數設定SettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            context.Add(
                        new SettingDefinition(CmsSettingNames.前台參數設定.Url, @"", L("DisplayName:前台參數設定.Url"), L("Description:前台參數設定.Url"), false).WithProperty("Type","String")
                        );
        }
        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CmsResource>(name);
        }
    }
    public partial interface I前台參數設定Factory : IFactory<前台參數設定>, ITransientDependency { }
    public partial class 前台參數設定Factory : Factory<前台參數設定>, I前台參數設定Factory
    {
        public 前台參數設定Factory(
            ISettingProvider settingProvider)
            : base(settingProvider)
        {
        }

        protected override async Task CreateAsync(前台參數設定 options)
        {
            options.Url = await _settingProvider.GetOrNullAsync(CmsSettingNames.前台參數設定.Url);
        }
    }
}
