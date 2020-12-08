using System;
using System.Collections.Generic;
using Volo.Abp.IdentityServer.ApiResources;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.ApiResource.Dtos
{
    public class UpdateApiResourceDto : ExtensibleObject
    {
        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.DisplayNameMaxLength))]
        public string DisplayName { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.AllowedAccessTokenSigningAlgorithmsMaxLength))]
        public string AllowedAccessTokenSigningAlgorithms { get; set; }

        public bool Enabled { get; set; }

        public List<ApiResourceSecretDto> Secrets { get; set; }

        public List<ApiResourceScopeDto> Scopes { get; set; }

        public List<ApiResourceClaimDto> UserClaims { get; set; }

        public List<ApiResourcePropertyDto> Properties { get; set; }

        public UpdateApiResourceDto()
            : base(false)
        {

        }
    }
}
