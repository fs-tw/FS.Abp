using System;
using System.IO;
using System.Linq;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Volo.FileManagement.Directories
{
    public class DirectoryDescriptor : AuditedAggregateRoot<Guid>, IMultiTenant
    {
        public Guid? TenantId { get; protected set; }

        public string Name { get; protected set; }

        public Guid? ParentId { get; set; }

        protected DirectoryDescriptor()
        {
        }

        public DirectoryDescriptor(Guid id, [NotNull] string name, Guid? parentId = null, Guid? tenantId = null)
            : base(id)
        {
            TenantId = tenantId;
            ParentId = parentId;

            SetName(name);
        }

        internal virtual void SetName([NotNull] string name)
        {
            Name = FileNameValidator.CheckDirectoryName(name);
        }
    }
}