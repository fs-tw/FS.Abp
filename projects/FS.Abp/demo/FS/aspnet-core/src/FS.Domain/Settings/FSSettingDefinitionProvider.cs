using Volo.Abp.Settings;

namespace FS.Settings
{
    public class FSSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(FSSettings.MySetting1));
        }
    }
}
