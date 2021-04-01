using System;
using System.Collections.Generic;
using System.Text;

namespace FS.FormManagement.Versions
{
    public interface IVersion : Volo.Abp.Domain.Entities.IEntity
    {
        Guid? VersionId { get; set; }
    }
}
