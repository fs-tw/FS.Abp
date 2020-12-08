using System.Collections.Generic;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.TextTemplating;
using Xunit;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public class TextTemplateDefinitionsAppService_Test : TextTemplateManagementApplicationTestBase
    {
        private readonly ITemplateDefinitionManager _templateDefinitionManager;

        public TextTemplateDefinitionsAppService_Test()
        {
            _templateDefinitionManager = GetRequiredService<ITemplateDefinitionManager>();
        }

        [Fact]
        public void Get_All_Template_Definitions()
        {
            var templateDefinitions = _templateDefinitionManager.GetAll();

            templateDefinitions.ShouldNotBeNull();
            templateDefinitions.Count.ShouldBeGreaterThan(0);
        }
    }
}