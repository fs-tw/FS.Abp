using System.Collections.Generic;
using Volo.Abp.IdentityServer.ApiResources;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.ApiResource.Dtos
{
    public class CreateApiResourceDto : ExtensibleObject
    {
        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.NameMaxLength))]
        public string Name { get;  set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.DisplayNameMaxLength))]
        public string DisplayName { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.AllowedAccessTokenSigningAlgorithmsMaxLength))]
        public string AllowedAccessTokenSigningAlgorithms { get; set; }

        public bool ShowInDiscoveryDocument { get; set; }

        public List<ApiResourceClaimDto> UserClaims { get; set; }

        public CreateApiResourceDto()
            : base(false)
        {

        }
    }
}
