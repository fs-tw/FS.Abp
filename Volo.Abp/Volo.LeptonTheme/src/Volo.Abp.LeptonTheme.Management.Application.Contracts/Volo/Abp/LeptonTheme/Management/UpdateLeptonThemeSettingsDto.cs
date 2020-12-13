namespace Volo.Abp.LeptonTheme.Management
{
    public class UpdateLeptonThemeSettingsDto
    {
        public bool BoxedLayout { get; set; }

        public MenuPlacement MenuPlacement { get; set; }

        public MenuStatus MenuStatus { get; set; }

        public LeptonStyle Style { get; set; }
    }
}
