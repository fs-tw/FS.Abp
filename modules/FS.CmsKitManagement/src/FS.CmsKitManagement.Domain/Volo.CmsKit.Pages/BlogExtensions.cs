using FS.CmsKitManagement;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Data;

namespace Volo.CmsKit.Pages
{

    public static partial class PagesExtensions
    {
        public static string GetDisplayStyle(this Page page)
        {
            return page.GetProperty<string>(Consts.DisplayStyle);
        }
        public static void SetDisplayStyle(this Page page, string value)
        {
            page.SetProperty(Consts.DisplayStyle, value);
        }
    }
}
