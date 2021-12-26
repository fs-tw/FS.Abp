using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.IO;
using System.Linq;
using Volo.Abp;

namespace FS.Abp.Swashbuckle
{
    public class SwaggerDocConfigureOptions : IConfigureOptions<SwaggerGenOptions>
    {
        private readonly IAbpApplication _application;

        private readonly IApiDescriptionGroupCollectionProvider _descriptionProvider;
        public SwaggerDocConfigureOptions(
            IAbpApplication abpApplication,
            IApiDescriptionGroupCollectionProvider descriptionProvider
            )
        {
            _application = abpApplication;
            _descriptionProvider = descriptionProvider;
        }
        public void Configure(SwaggerGenOptions options)
        {
            ConfigureSwaggerDoc(options);

            ConfigureXmlComments(options);
        }

        private void ConfigureSwaggerDoc(SwaggerGenOptions options)
        {
            options.DocInclusionPredicate((docName, description) =>
            {
                if (_application.Modules.All(x => x.Type.Name != docName))
                    return true;
                return description.GroupName == null || description.GroupName == docName;
            });

            var names = _descriptionProvider.ApiDescriptionGroups.Items
                .Select(x => x.GroupName)
                .Where(x => !string.IsNullOrEmpty(x))
                .OrderBy(x => x);

            foreach (var moduleName in names)
            {
                options.SwaggerDoc(moduleName, new OpenApiInfo { Title = moduleName, Version = moduleName });
            }
        }

        private void ConfigureXmlComments(SwaggerGenOptions options)
        {
            _application.Modules.ToList().ForEach(m =>
            {
                string path = new Uri(m.Assembly.Location).LocalPath;

                var xmlFilePath = path.Substring(0, path.LastIndexOf('.')) + ".xml";

                if (System.IO.File.Exists(xmlFilePath))
                    options.IncludeXmlComments(xmlFilePath, true);

            });

        }
    }
}
