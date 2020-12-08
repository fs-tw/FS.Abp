using System.Linq;
using System.Threading.Tasks;
using LdapForNet;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ldap;

namespace Volo.Abp.Account.Public.Web.Ldap
{
    [Dependency(ReplaceServices = true)]
    [ExposeServices(typeof(OpenLdapManager), typeof(ILdapManager), typeof(LdapManager))]
    public class OpenLdapManager : LdapManager
    {
        public OpenLdapManager(IOptions<AbpLdapOptions> ldapSettingsOptions)
            : base(ldapSettingsOptions)
        {
        }

        public virtual async Task<string> GetUserEmailAsync(string userName)
        {
            using (var conn = await CreateLdapConnectionAsync())
            {
                await AuthenticateLdapConnectionAsync(conn, NormalizeUserName(LdapOptions.UserName), LdapOptions.Password);

                var searchResults = await conn.SearchAsync(GetBaseDn(), GetUserFilter(userName));
                try
                {
                    var userEntry = searchResults.First();
                    return GetUserEmail(userEntry);
                }
                catch (LdapException e)
                {
                    Logger.LogException(e);
                }

                return null;
            }
        }

        protected virtual string NormalizeUserName(string userName)
        {
            return $"cn={userName},{LdapOptions.BaseDc}";
        }

        protected virtual string GetUserEmail(LdapEntry ldapEntry)
        {
            return ldapEntry.ToDirectoryEntry().GetAttribute("mail")?.GetValue<string>();
        }

        protected virtual string GetBaseDn()
        {
            return LdapOptions.BaseDc;
        }

        protected virtual string GetUserFilter(string userName)
        {
            return $"(&(uid={userName}))";
        }
    }
}
