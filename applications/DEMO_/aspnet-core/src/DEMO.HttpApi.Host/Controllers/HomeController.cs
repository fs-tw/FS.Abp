using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Volo.Abp.AspNetCore.Mvc;

namespace DEMO.Controllers
{
    public class HomeController : AbpController
    {
        public IWebHostEnvironment env { get; set; }
        public HomeController(IWebHostEnvironment env)
        {
            this.env = env;
        }
        public ActionResult Index()
        {
            if (this.env.IsDevelopment())
            {
                return Redirect("~/swagger");
            }
            else
            {
                return Redirect("~/demo-admin");
            }
        }
    }
}
