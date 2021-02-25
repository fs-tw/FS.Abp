using Volo.Abp.Settings;

namespace WB.Settings
{
    public class WBSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(WBSettings.MySetting1));
        }
    }
}
