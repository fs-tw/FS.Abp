

using FS.Abp.SpaServices;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Options;
using System.IO;

namespace Microsoft.AspNetCore.Builder
{
    public static class AbpSpaServiceExtensions
    {

        public static IApplicationBuilder UseFSAbpSpaService(this IApplicationBuilder app)
        {
            var options = app.ApplicationServices
               .GetRequiredService<IOptions<AbpSpaServiceOptions>>()
               .Value;
            var root = options.ApplicationRoot;
            foreach (var name in options.ApplicationNames) {
                if (!Directory.Exists(Path.Combine(Directory.GetCurrentDirectory(), root, name))) continue;
                app.Map("/"+name, application =>
                {
                    application.UseSpa(spa =>
                    {
                        spa.Options.SourcePath = string.Format("{0}/{1}", root, name);
                        spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                        {
                            FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), root, name))
                        };
                    });
                });
            }
            return app;
        }
    }
}
