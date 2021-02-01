using Volo.Abp.Settings;

namespace FS.Theme.TheProject.Settings
{
    public class TheProjectSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            context.Add(
                new SettingDefinition(TheProjectSettings.Skin, TheProjectSkin.light_blue.ToString(), null, null, true)
            );
        }
    }
}