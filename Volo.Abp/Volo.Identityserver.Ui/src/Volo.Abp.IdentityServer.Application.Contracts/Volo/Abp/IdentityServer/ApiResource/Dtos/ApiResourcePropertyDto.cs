using System;

namespace Volo.Abp.IdentityServer.ApiResource.Dtos
{
    public class ApiResourcePropertyDto
    {
        public Guid ApiResourceId { get; set; }

        public string Key { get; set; }

        public string Value { get; set; }
    }
}
