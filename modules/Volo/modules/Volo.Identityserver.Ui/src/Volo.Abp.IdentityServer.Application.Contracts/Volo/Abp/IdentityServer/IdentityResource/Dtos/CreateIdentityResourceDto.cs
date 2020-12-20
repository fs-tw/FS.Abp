﻿using System.Collections.Generic;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.IdentityServer.IdentityResource.Dtos
{
    public class CreateIdentityResourceDto : ExtensibleObject
    {
        public string Name { get; set; }

        public string DisplayName { get; set; }

        public string Description { get; set; }

        public bool Enabled { get; set; }

        public bool Required { get; set; }

        public bool Emphasize { get; set; }

        public bool ShowInDiscoveryDocument { get; set; }

        public List<IdentityResourceClaimDto> UserClaims { get; set; }

        public List<IdentityResourcePropertyDto> Properties { get; set; }

        public CreateIdentityResourceDto()
            : base(false)
        {

        }
    }
}