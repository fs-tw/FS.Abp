using Volo.Payment.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Volo.Payment
{
    public class PaymentPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            //var moduleGroup = context.AddGroup(AbpPaymentPermissions.GroupName, L("Permission:Payment"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<PaymentResource>(name);
        }
    }
}