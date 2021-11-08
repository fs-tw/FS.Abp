
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FS.Abp.EntityTypes;

namespace FS.CmsKitManagement.MultiLinguals
{
    public class MultiLingualsManager : Volo.Abp.Domain.Services.DomainService
    {
        protected EntityTypeOptions Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityTypeOptions>>().Value;
        protected IMultiLingualsStore Store => this.LazyServiceProvider.LazyGetRequiredService<IMultiLingualsStore>();
    }
}
