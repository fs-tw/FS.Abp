using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class GetClientListInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
