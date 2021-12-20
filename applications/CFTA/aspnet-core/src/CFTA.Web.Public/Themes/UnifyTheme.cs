using Volo.Abp.AspNetCore.Mvc.UI.Theming;
using Volo.Abp.DependencyInjection;

namespace CFTA.Themes
{
    [ThemeName(Name)]
    public class UnifyTheme : ITheme, ITransientDependency
    {
        public const string Name = "Unify";
        public virtual string GetLayout(string name, bool fallbackToDefault = true)
        {
            return "~/Themes/Basic/Layouts/Public.cshtml";
        }
    }
}

