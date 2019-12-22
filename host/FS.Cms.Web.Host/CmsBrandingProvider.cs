﻿using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace FS.Cms
{
    [Dependency(ReplaceServices = true)]
    public class CmsBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Cms";
    }
}
