namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components
{
    public abstract class LeptonViewComponentBase : AbpViewComponent
    {
        protected LeptonViewComponentBase()
        {
            ObjectMapperContext = typeof(AbpAspNetCoreMvcUiLeptonThemeModule);
        }
    }
}