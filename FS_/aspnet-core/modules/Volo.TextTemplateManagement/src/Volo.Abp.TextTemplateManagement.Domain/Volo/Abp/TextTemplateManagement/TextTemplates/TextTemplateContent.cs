using JetBrains.Annotations;
using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public class TextTemplateContent : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        public virtual Guid? TenantId { get; set; }

        public virtual string Name { get; private set; }

        public virtual string CultureName { get; private set; }

        public virtual string Content { get; private set; }
        
        protected TextTemplateContent()
        {

        }

        public TextTemplateContent(
            [NotNull] Guid id,
            [NotNull] string name,
            [NotNull] string content,
            [CanBeNull] string cultureName = null,
            Guid? tenantId = null) : base(id)
        {
            SetName(name);
            SetCultureName(cultureName);
            SetContent(content);
            
            TenantId = tenantId;
        }

        public virtual void SetName([NotNull] string name)
        {
            Name = Check.NotNullOrWhiteSpace(name, nameof(name), TextTemplateConsts.MaxNameLength);
        }

        public virtual void SetCultureName([CanBeNull] string cultureName)
        {
            CultureName = cultureName == null 
                ? null 
                : Check.Length(cultureName, nameof(cultureName), TextTemplateConsts.MaxCultureNameLength, TextTemplateConsts.MinCultureNameLength);
        }

        public virtual void SetContent([NotNull] string content)
        {
            Content = Check.NotNullOrWhiteSpace(content, nameof(content), TextTemplateConsts.MaxContentLength);
        }
    }
}