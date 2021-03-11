using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public class ThemeInfo
    {
        public string No { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public WebSiteConfig WebSiteConfig { get; set; }
        public List<Banner> Banners { get; set; }
        public List<Router> Routers { get; set; }
    }

    public class WebSiteConfig 
    {
        public string LogoFileSource { get; set; }
        public string Title { get; set; }
        public string Favicon { get; set; }
        public int Count { get; set; }
        public string Copyright { get; set; }
    }

    public class Banner 
    {
        public string No { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public bool Disable { get; set; }
        public string FileSource { get; set; }
        public int Sequence { get; set; }
    }

    public class Router 
    {
        public string No { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public bool Disable { get; set; }
        public string Icon { get; set; }
        public string Url { get; set; }
        public bool OpenAnotherWindow { get; set; }
        public int Sequence { get; set; }
        public List<Router> Routes { get; set; }
    }
}
