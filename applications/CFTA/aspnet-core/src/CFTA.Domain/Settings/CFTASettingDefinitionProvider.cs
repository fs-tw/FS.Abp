﻿using Volo.Abp.Settings;

namespace CFTA.Settings
{
    public class CFTASettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(CFTASettings.MySetting1));
        }
    }
}
