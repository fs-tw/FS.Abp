
using FS.Abp.EntityFeatures;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.MultiLinguals
{
    public class MultiLingualsManager : Volo.Abp.Domain.Services.DomainService
    {
        protected EntityFeaturesOptions Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityFeaturesOptions>>().Value;
        protected IMultiLingualsStore Store => this.LazyServiceProvider.LazyGetRequiredService<IMultiLingualsStore>();
    }
}
