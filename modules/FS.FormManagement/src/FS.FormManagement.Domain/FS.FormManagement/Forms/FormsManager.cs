using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Domain.Services;

namespace FS.FormManagement.Forms
{
    public class FormsManager:DomainService
    {
        protected FS.FormManagement.Versions.IVersionsStore VersionsStore => this.LazyServiceProvider.LazyGetRequiredService<FS.FormManagement.Versions.IVersionsStore>();


    }
}
