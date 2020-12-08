using Volo.Abp.Settings;

namespace Volo.Abp.LeptonTheme.Management
{
    public class LeptonThemeSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            context.Add(
                new SettingDefinition(LeptonThemeSettingNames.Layout.Boxed,  "false", null, null, true),
                new SettingDefinition(LeptonThemeSettingNames.Layout.MenuPlacement, MenuPlacement.Left.ToString(), null, null, true),
                new SettingDefinition(LeptonThemeSettingNames.Layout.MenuStatus, MenuStatus.AlwaysOpened.ToString(), null, null, true),
                new SettingDefinition(LeptonThemeSettingNames.Style, LeptonStyle.Style1.ToString(), null, null, true)
            );
        }
    }
}
