using Volo.Abp.Features;
using Volo.Abp.Localization;
using Volo.Abp.Validation.StringValues;
using Volo.Chat.Localization;

namespace Volo.Chat
{
    public class ChatFeatureDefinitionProvider : FeatureDefinitionProvider
    {
        public override void Define(IFeatureDefinitionContext context)
        {
            var group = context.AddGroup(ChatFeatures.GroupName,
                L("Feature:ChatGroup"));
            group.AddFeature(ChatFeatures.Enable,
                false.ToString(),
                L("Feature:ChatEnable"),
                L("Feature:ChatEnableDescription"),
                new ToggleStringValueType());
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ChatResource>(name);
        }
    }
}
