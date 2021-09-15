using Volo.Abp.Settings;

namespace CrystalQuartzSample.Settings
{
    public class CrystalQuartzSampleSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(CrystalQuartzSampleSettings.MySetting1));
        }
    }
}
