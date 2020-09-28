using FS.Abp.CodingManagement.Coding;
using FS.Cms;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc.MultiTenancy;

namespace FS.Cms.Definition
{
    public partial class DefinitionController : CmsController
    {
        [HttpGet]
        [Route("blog")]
        public async Task<List<string>> BlogAsync(string tenantName)
        {
            var tenant=await _abpTenantAppService.FindTenantByNameAsync(tenantName);
            using (this.CurrentTenant.Change(tenant.TenantId))
            {
                return await this._appService.BlogAsync();
            }       
        }

        [HttpPut]
        [Route("blog")]
        public async Task BlogCreateAsync(string tenantName,string displayName)
        {
            var tenant = await _abpTenantAppService.FindTenantByNameAsync(tenantName);
            using (this.CurrentTenant.Change(tenant.TenantId))
            {
                 await this._appService.BlogCreateAsync(displayName);
            }
        }
        [HttpDelete]
        [Route("blog/{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return this._appService.BlogDeleteAsync(id);
        }

    }
}
