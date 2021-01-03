using Volo.Abp.Localization;
using Volo.Abp.Settings;

namespace FS.Abp.Line.Notify
{
    internal class LineNotifySettingProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            context.Add(
                new SettingDefinition(LineNotifySettingNames.ClientId, ""),

                new SettingDefinition(LineNotifySettingNames.ClientSecret, ""),

                new SettingDefinition(LineNotifySettingNames.Token, "")
            );
        }
    }
}