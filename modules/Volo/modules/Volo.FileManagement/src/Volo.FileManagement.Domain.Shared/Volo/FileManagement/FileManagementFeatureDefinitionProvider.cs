using Volo.Abp.Features;
using Volo.Abp.Localization;
using Volo.Abp.Validation.StringValues;
using Volo.FileManagement.Localization;

namespace Volo.FileManagement
{
    public class FileManagementFeatureDefinitionProvider : FeatureDefinitionProvider
    {
        public override void Define(IFeatureDefinitionContext context)
        {
            var group = context.AddGroup(FileManagementFeatures.GroupName,
                L("Feature:FileManagementGroup"));
            
            group.AddFeature(FileManagementFeatures.Enable,
                "true",
                L("Feature:FileManagementEnable"),
                L("Feature:FileManagementEnableDescription"),
                new ToggleStringValueType());
            
            group.AddFeature(FileManagementFeatures.StorageSize,
                "0",
                L("Feature:FileManagementStorageSize"),
                L("Feature:FileManagementStorageSizeDescription"),
                new FreeTextStringValueType(new StringValueValidator(1, int.MaxValue, "^[0-9]+$", true)));
        }
        
        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<FileManagementResource>(name);
        }
    }
}