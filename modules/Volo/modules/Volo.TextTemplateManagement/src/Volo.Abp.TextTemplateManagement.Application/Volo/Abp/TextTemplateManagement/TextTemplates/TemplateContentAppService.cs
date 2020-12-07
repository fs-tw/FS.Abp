using Microsoft.AspNetCore.Authorization;
using System;
using System.Threading.Tasks;
using Volo.Abp.TextTemplateManagement.Authorization;
using Volo.Abp.TextTemplating;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    [Authorize(TextTemplateManagementPermissions.TextTemplates.Default)]
    public class TemplateContentAppService : TextTemplateManagementAppServiceBase, ITemplateContentAppService
    {
        private readonly ITextTemplateContentRepository _textTemplateContentRepository;
        private readonly ITemplateContentProvider _templateContentProvider;
        private readonly ITemplateDefinitionManager _templateDefinitionManager;

        public TemplateContentAppService(
            ITextTemplateContentRepository textTemplateContentRepository,
            ITemplateContentProvider templateContentProvider, 
            ITemplateDefinitionManager templateDefinitionManager)
        {
            _textTemplateContentRepository = textTemplateContentRepository;
            _templateContentProvider = templateContentProvider;
            _templateDefinitionManager = templateDefinitionManager;
        }

        public virtual async Task<TextTemplateContentDto> GetAsync(GetTemplateContentInput input)
        {
            var templateDefinition = _templateDefinitionManager.Get(input.TemplateName);
            var templateContent = await _templateContentProvider.GetContentOrNullAsync(
                                        templateDefinition,
                                        input.CultureName,
                                        useCurrentCultureIfCultureNameIsNull: false
                                    );

            return new TextTemplateContentDto
            {
                CultureName = input.CultureName,
                Content = templateContent,
                Name = input.TemplateName
            };
        }
        
        [Authorize(TextTemplateManagementPermissions.TextTemplates.EditContents)]
        public virtual async Task RestoreToDefaultAsync(RestoreTemplateContentInput input)
        {
            var templateDefinition = _templateDefinitionManager.Get(input.TemplateName);

            var content = await _textTemplateContentRepository.FindAsync(templateDefinition.Name, input.CultureName);

            if (content != null)
            {
                await _textTemplateContentRepository.DeleteAsync(content);
            }
        }
        
        [Authorize(TextTemplateManagementPermissions.TextTemplates.EditContents)]
        public virtual async Task<TextTemplateContentDto> UpdateAsync(UpdateTemplateContentInput input)
        {
            // This business logic should not be perfect.
            // First, we delete the content in DB
            // Because we cannot access the real default value via TemplateDefinitionManager
            // that stored by VirtualFiles while DB has value.

            var templateDefinition = _templateDefinitionManager.Get(input.TemplateName);

            var storedTemplateContent = await _textTemplateContentRepository.FindAsync(input.TemplateName, input.CultureName);

            if (storedTemplateContent != null)
            {
                await _textTemplateContentRepository.DeleteAsync(storedTemplateContent, true);
            }

            var defaultTemplateContent = await _templateContentProvider.GetContentOrNullAsync(
                templateDefinition,
                input.CultureName,
                tryDefaults: true,
                useCurrentCultureIfCultureNameIsNull: false
            );

            if (defaultTemplateContent == input.Content)
            {
                return new TextTemplateContentDto
                {
                    Content = defaultTemplateContent,
                    Name = input.TemplateName,
                    CultureName = input.CultureName
                };
            }
            
            var newContent = new TextTemplateContent(
                    Guid.NewGuid(), 
                    input.TemplateName,
                    input.Content, 
                    input.CultureName, 
                    CurrentTenant.Id);
            
            await _textTemplateContentRepository.InsertAsync(newContent);

            return new TextTemplateContentDto
            {
                Content = input.Content,
                Name = input.TemplateName,
                CultureName = input.CultureName
            };
        }
    }
}