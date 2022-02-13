using FS.Entity.EntityFeatures;
using FS.Entity.MultiLinguals;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Entity.MultiLinguals
{
    public class MultiLingualsManager : Volo.Abp.Domain.Services.DomainService
    {
        protected EntityFeaturesOptions Options => LazyServiceProvider.LazyGetRequiredService<IOptions<EntityFeaturesOptions>>().Value;
        protected IMultiLingualsStore Store => LazyServiceProvider.LazyGetRequiredService<IMultiLingualsStore>();
    }
}
