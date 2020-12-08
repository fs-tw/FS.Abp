using Volo.Abp.LanguageManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var languageManagementGroup = context.AddGroup(LanguageManagementPermissions.GroupName, L("Permission:LanguageManagement"));

            var textGroup = languageManagementGroup.AddPermission(LanguageManagementPermissions.LanguageTexts.Default, L("Permission:LanguageTexts"));

            textGroup.AddChild(LanguageManagementPermissions.LanguageTexts.Edit, L("Permission:LanguageTextsEdit"));

            var langGroup = languageManagementGroup.AddPermission(LanguageManagementPermissions.Languages.Default, L("Permission:Languages"));

            langGroup.AddChild(LanguageManagementPermissions.Languages.Create, L("Permission:LanguagesCreate"));
            langGroup.AddChild(LanguageManagementPermissions.Languages.Edit, L("Permission:LanguagesEdit"));
            langGroup.AddChild(LanguageManagementPermissions.Languages.ChangeDefault, L("Permission:LanguagesChangeDefault"));
            langGroup.AddChild(LanguageManagementPermissions.Languages.Delete, L("Permission:LanguagesDelete"));

        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<LanguageManagementResource>(name);
        }
    }
}