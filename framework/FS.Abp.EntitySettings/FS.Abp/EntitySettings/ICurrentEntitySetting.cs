using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.EntitySettings
{
    public interface ICurrentEntitySettingAccessor
    {
        BasicEntitySettingInfo Current { get; set; }
    }
    public interface ICurrentEntitySetting
    {
        Guid? Id { get; }

        string Name { get; }

        IDisposable Change<T>(Guid? id)
             where T : Volo.Abp.Domain.Entities.IEntity<Guid>;

    }
}
