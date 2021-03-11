using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public class ThemeInfo
    {
        public string No { get; set; }     
        public WebSiteInfo WebSiteInfo { get; set; }
        public List<BannerInfo> Banners { get; set; }
        public List<RouterInfo> Routers { get; set; }
    }

    public class WebSiteInfo
    {
        public string LogoSource { get; set; }
        public string Title { get; set; }
        public string FaviconSource { get; set; }
        public int Count { get; set; }
        public string Copyright { get; set; }
    }

  
    public class BannerInfo
    {
        public string No { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public bool Disable { get; set; }
        public string ImageFileSource { get; set; }
        public int Sequence { get; set; }
    }

    public class RouterInfo
    {
        public string No { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public bool Disable { get; set; }
        public string IconSource { get; set; }
        public string Url { get; set; }
        public bool OpenAnotherWindow { get; set; }
        public int Sequence { get; set; }
        public List<RouterInfo> Routes { get; set; }
    }
}
