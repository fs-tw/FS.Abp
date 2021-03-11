using FS.Abp.AspNetCore.SwaggerDoc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Volo.Abp;
using Microsoft.Extensions.DependencyInjection;
namespace Microsoft.AspNetCore.Builder
{
    public static class ApplicationBuilderAbpSwaggerDocExtension
    {
        public static IApplicationBuilder UseSwaggerDoc(this IApplicationBuilder app)
        {
            
            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/Abp/swagger.json", "Abp");
                var serviceProvider = app.ApplicationServices;
                var myOptions = serviceProvider.GetService<IOptions<SwaggerDocOptions>>().Value;
                myOptions.FindDocNames().ForEach(docName =>
                {
                    options.SwaggerEndpoint($"/swagger/{docName}/swagger.json", docName);
                });
                var fileProvider = serviceProvider.GetService<Volo.Abp.VirtualFileSystem.IVirtualFileProvider>();

                var indexHtml = new System.IO.StreamReader(fileProvider.GetFileInfo("/Files/swagger/ui/index.html").CreateReadStream()).ReadToEnd();
                var abpJs = new System.IO.StreamReader(fileProvider.GetFileInfo("/Files/swagger/ui/abp.js").CreateReadStream()).ReadToEnd();
                var abpSwaggerJs = new System.IO.StreamReader(fileProvider.GetFileInfo("/Files/swagger/ui/abp.swagger.js").CreateReadStream()).ReadToEnd();
                var resultIndex = indexHtml.Replace("//%abp.js", abpJs).Replace("//%abp.swagger.js", abpSwaggerJs);
                var indexBytes = resultIndex.GetBytes(Encoding.UTF8);
                options.IndexStream = () => new System.IO.MemoryStream(indexBytes);
            });
            return app;
        }
    }
}
