using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Domain.Services;

namespace FS.FormManagement.Forms
{
    public class FormsManager:DomainService
    {
        protected FS.FormManagement.Versions.IVersionsStore VersionsStore => this.LazyServiceProvider.LazyGetRequiredService<FS.FormManagement.Versions.IVersionsStore>();

        /// <summary>
        /// 編上版號，
        /// </summary>
        /// <param name="entity"></param>
        public void CommitFormal(Formal entity)
        {
            if (entity.VersionId != null)
                throw new Volo.Abp.UserFriendlyException("已建立版號，請重新建立Formal");

            //VersionsStore.VersionDefinition




        }
    }
}
