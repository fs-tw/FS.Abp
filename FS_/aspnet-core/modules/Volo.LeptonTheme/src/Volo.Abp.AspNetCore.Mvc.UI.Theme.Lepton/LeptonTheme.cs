using Microsoft.Extensions.Configuration;
using Volo.Abp.AspNetCore.Mvc.UI.Theming;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton
{
    [ThemeName(Name)]
    public class LeptonTheme : ITheme, ITransientDependency
    {
        public const string Name = "Lepton";

        private readonly IConfiguration _configuration;

        public LeptonTheme(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public virtual string GetLayout(string name, bool fallbackToDefault = true)
        {
            switch (name)
            {
                case StandardLayouts.Application:
                    return GetLayoutFromConfig("Application") ?? "~/Themes/Lepton/Layouts/Application/Default.cshtml";
                case StandardLayouts.Account:
                    return GetLayoutFromConfig("Account") ?? "~/Themes/Lepton/Layouts/Account/Default.cshtml";
                case StandardLayouts.Empty:
                    return GetLayoutFromConfig("Empty") ??"~/Themes/Lepton/Layouts/Empty/Default.cshtml";
                default:
                    return fallbackToDefault ? "~/Themes/Lepton/Layouts/Application/Default.cshtml" : null;
            }
        }

        private string GetLayoutFromConfig(string layoutName)
        {
            return _configuration["LeptonTheme:Layouts:" + layoutName];
        }
    }
}
