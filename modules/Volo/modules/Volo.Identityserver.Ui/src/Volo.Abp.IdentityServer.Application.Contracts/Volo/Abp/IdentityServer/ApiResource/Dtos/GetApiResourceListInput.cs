using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.IdentityServer.ApiResource.Dtos
{
    public class GetApiResourceListInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
