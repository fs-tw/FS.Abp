using Volo.Abp.IdentityServer.Clients;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class CreateClientDto : ExtensibleObject
    {
        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.ClientIdMaxLength))]
        public string ClientId { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.ClientNameMaxLength))]
        public string ClientName { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.ClientUriMaxLength))]
        public string ClientUri { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.LogoUriMaxLength))]
        public string LogoUri { get; set; }

        public bool RequireConsent { get; set; }

        public string CallbackUrl { get; set; }

        public string LogoutUrl { get; set; }

        public ClientSecretDto[] Secrets { get; set; }

        public string[] Scopes { get; set; }

        public CreateClientDto()
            : base(false)
        {

        }
    }
}
