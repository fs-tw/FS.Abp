using System;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Volo.FileManagement.Files
{
    public class FileDescriptor : AuditedAggregateRoot<Guid>, IMultiTenant
    {
        public Guid? TenantId { get; protected set; }

        public Guid? DirectoryId { get; internal set; }

        public string Name { get; protected set; }

        public string MimeType { get; set; }

        public int Size { get; protected internal set; }

        protected FileDescriptor()
        {
            
        }

        public FileDescriptor(
            Guid id,
            [NotNull] string name,
            [NotNull] string mimeType,
            Guid? directoryId = null,
            int size = 0,
            Guid? tenantId = null
            ) : base(id)
        {
            TenantId = tenantId;
            DirectoryId = directoryId;
            MimeType = mimeType;
            Size = size;
            
            SetName(name);
        }

        internal virtual void SetName([NotNull] string name)
        {
            Name = FileNameValidator.CheckFileName(name);
        }
    }
}