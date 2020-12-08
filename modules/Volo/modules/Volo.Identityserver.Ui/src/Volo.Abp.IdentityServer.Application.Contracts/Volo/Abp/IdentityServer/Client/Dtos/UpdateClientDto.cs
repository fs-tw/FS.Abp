using Volo.Abp.IdentityServer.Clients;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class UpdateClientDto : ExtensibleObject
    {
        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.ClientNameMaxLength))]
        public string ClientName { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.ClientUriMaxLength))]
        public string ClientUri { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.LogoUriMaxLength))]
        public string LogoUri { get; set; }

        public bool Enabled { get; set; } = true;

        public bool RequireConsent { get; set; }

        public bool AllowOfflineAccess { get; set; }

        public bool AllowRememberConsent { get; set; }

        public bool RequirePkce { get; set; }

        public bool RequireClientSecret { get; set; }

        public bool RequireRequestObject { get; set; }

        public int AccessTokenLifetime { get; set; }

        public int? ConsentLifetime { get; set; }

        public int AccessTokenType { get; set; }

        public bool EnableLocalLogin { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.FrontChannelLogoutUriMaxLength))]
        public string FrontChannelLogoutUri { get; set; }

        public bool FrontChannelLogoutSessionRequired { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.BackChannelLogoutUriMaxLength))]
        public string BackChannelLogoutUri { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.AllowedIdentityTokenSigningAlgorithms))]
        public string AllowedIdentityTokenSigningAlgorithms { get; set; }

        public bool BackChannelLogoutSessionRequired { get; set; }

        public bool IncludeJwtId { get; set; }

        public bool AlwaysSendClientClaims { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.PairWiseSubjectSaltMaxLength))]
        public string PairWiseSubjectSalt { get; set; }

        public int? UserSsoLifetime { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.UserCodeTypeMaxLength))]
        public string UserCodeType { get; set; }

        public int DeviceCodeLifetime { get; set; }

        public ClientSecretDto[] ClientSecrets { get; set; }

        public ClientClaimDto[] Claims { get; set; }

        public ClientPropertyDto[] Properties { get; set; }

        public string[] AllowedGrantTypes { get; set; }

        public string[] IdentityProviderRestrictions { get; set; }

        public string[] Scopes { get; set; }

        public string[] AllowedCorsOrigins { get; set; }

        public string[] RedirectUris { get; set; }

        public string[] PostLogoutRedirectUris { get; set; }

        public UpdateClientDto()
            : base(false)
        {

        }
    }
}
