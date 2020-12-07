using System.Collections.Generic;
using Volo.Abp.IdentityServer.ApiScopes;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.ApiScope.Dtos
{
    public class CreateApiScopeDto : ExtensibleObject
    {
        [DynamicStringLength(typeof(ApiScopeConsts), nameof(ApiScopeConsts.NameMaxLength))]
        public string Name { get; set; }

        [DynamicStringLength(typeof(ApiScopeConsts), nameof(ApiScopeConsts.DisplayNameMaxLength))]
        public string DisplayName { get; set; }

        [DynamicStringLength(typeof(ApiScopeConsts), nameof(ApiScopeConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        public bool Required { get; set; }

        public bool Enabled { get; set; }

        public bool Emphasize { get; set; }

        public bool ShowInDiscoveryDocument { get; set; }

        public List<ApiScopeClaimDto> UserClaims { get; set; }

        public List<ApiScopePropertyDto> Properties { get; set; }

        public CreateApiScopeDto()
            : base(false)
        {

        }
    }
}
