﻿using Volo.Abp.Settings;

namespace DEMO.Settings
{
    public class DEMOSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(DEMOSettings.MySetting1));
        }
    }
}
