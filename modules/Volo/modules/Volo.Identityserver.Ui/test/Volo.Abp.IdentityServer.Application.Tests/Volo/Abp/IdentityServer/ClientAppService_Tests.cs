using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Application.Dtos;
using Volo.Abp.IdentityServer.Client;
using Volo.Abp.IdentityServer.Client.Dtos;
using Volo.Abp.IdentityServer.Clients;
using Xunit;

namespace Volo.Abp.IdentityServer
{
    public class ClientAppService_Tests : AbpIdentityServerApplicationTestBase
    {
        private readonly IClientAppService _clientAppService;
        private readonly IClientRepository _clientRepository;
        private readonly AbpIdentityServerTestData _testData;

        public ClientAppService_Tests()
        {
            _clientAppService = GetRequiredService<IClientAppService>();
            _clientRepository = GetRequiredService<IClientRepository>();
            _testData = GetRequiredService<AbpIdentityServerTestData>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            var listResultDto = await _clientAppService.GetListAsync(new GetClientListInput());

            listResultDto.Items.Count.ShouldBeGreaterThan(0);
        }

        [Fact]
        public async Task GetAsync()
        {
            var client = await _clientAppService.GetAsync(_testData.Client1Id);

            client.ShouldNotBeNull();
        }

        [Fact]
        public async Task CreateAsync()
        {
            var clientId = "SampleId";

            var clientDto = new CreateClientDto
            {
                ClientId = clientId,
                Scopes = new [] { nameof(ClientScope.Scope) },
                Secrets = new ClientSecretDto[0]
            };

            var client = await _clientAppService.CreateAsync(clientDto);

            client.ShouldNotBeNull();
            client.ClientId.ShouldBe(clientId);
            client.AllowedScopes.Count.ShouldBe(1);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            var newName = "NewClientName";

            var updateDto = new UpdateClientDto
            {
                ClientName = newName,
                Scopes = new [] {nameof(ClientScope.Scope), "SecondScope"},
                ClientSecrets = new ClientSecretDto[] { },
                AllowedGrantTypes = new [] { nameof(ClientGrantType.GrantType)},
                AllowedCorsOrigins = new string[] { },
                RedirectUris = new string[] { },
                PostLogoutRedirectUris = new string[] { },
                IdentityProviderRestrictions = new string[] { },
                Claims = new ClientClaimDto[] { },
                Properties = new ClientPropertyDto[] { }
            };

            var returnDto = await _clientAppService.UpdateAsync(_testData.Client1Id, updateDto);

            returnDto.ClientName.ShouldBe(newName);
            returnDto.AllowedScopes.Count.ShouldBe(2);
            returnDto.ClientSecrets.Count.ShouldBe(0);
            returnDto.AllowedGrantTypes.Count.ShouldBe(1);
            returnDto.AllowedCorsOrigins.Count.ShouldBe(0);
            returnDto.RedirectUris.Count.ShouldBe(0);
            returnDto.PostLogoutRedirectUris.Count.ShouldBe(0);
            returnDto.IdentityProviderRestrictions.Count.ShouldBe(0);
            returnDto.Claims.Count.ShouldBe(0);
            returnDto.Properties.Count.ShouldBe(0);
        }

        [Fact]
        public async Task DeleteAsync()
        {
            await _clientAppService.DeleteAsync(_testData.Client1Id);

            (await _clientRepository.FindAsync(_testData.Client1Id)).ShouldBeNull();
        }
    }
}
