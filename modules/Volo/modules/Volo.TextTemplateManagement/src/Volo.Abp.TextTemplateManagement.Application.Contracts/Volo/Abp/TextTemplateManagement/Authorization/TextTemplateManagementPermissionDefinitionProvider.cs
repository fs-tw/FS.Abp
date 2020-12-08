using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.TextTemplateManagement.Localization;

namespace Volo.Abp.TextTemplateManagement.Authorization
{
    public class TextTemplateManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var moduleGroup = context.AddGroup(TextTemplateManagementPermissions.GroupName, L("Permission:TextTemplateManagement"));

            var textTemplateManagementGroup = moduleGroup.AddPermission(TextTemplateManagementPermissions.TextTemplates.Default, L("Permission:TextTemplates"));
            textTemplateManagementGroup.AddChild(TextTemplateManagementPermissions.TextTemplates.EditContents, L("Permission:EditContents"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<TextTemplateManagementResource>(name);
        }
    }
}