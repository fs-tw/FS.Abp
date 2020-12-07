using Volo.Abp.Account.Localization;
using Volo.Abp.Features;
using Volo.Abp.Localization;
using Volo.Abp.Validation.StringValues;

namespace Volo.Abp.Account.Feature
{
    public class AccountFeatureDefinitionProvider : FeatureDefinitionProvider
    {
        public override void Define(IFeatureDefinitionContext context)
        {
            var group = context.AddGroup(AccountFeature.GroupName,
                L("Feature:AccountGroup"));

            group.AddFeature(AccountFeature.EnableLdapLogin,
                false.ToString(),
                L("Feature:EnableLdapLogin"),
                L("Feature:EnableLdapLogin"),
                new ToggleStringValueType());
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AccountResource>(name);
        }
    }
}
