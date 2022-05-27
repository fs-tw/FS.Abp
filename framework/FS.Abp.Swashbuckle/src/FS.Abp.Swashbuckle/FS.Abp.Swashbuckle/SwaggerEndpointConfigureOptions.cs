using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerUI;
using System.Linq;

namespace FS.Abp.Swashbuckle
{
    public class SwaggerEndpointConfigureOptions : IConfigureOptions<SwaggerUIOptions>
    {
        private readonly IApiDescriptionGroupCollectionProvider _descriptionProvider;
        public SwaggerEndpointConfigureOptions(
            IApiDescriptionGroupCollectionProvider descriptionProvider)
        {
            _descriptionProvider = descriptionProvider;
        }
        public void Configure(SwaggerUIOptions options)
        {
            var names = _descriptionProvider.ApiDescriptionGroups.Items
                .Select(x => x.GroupName)
                .Where(x => !string.IsNullOrEmpty(x))
                .OrderBy(x => x)
                .ToList();
            
            foreach (var moduleName in names)
            {
                options.SwaggerEndpoint($"/swagger/{moduleName}/swagger.json", $"{moduleName} Docs");
            }

        }
    }
}
