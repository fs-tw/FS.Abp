using System.ComponentModel.DataAnnotations;

namespace Volo.Abp.Account
{
    public class AccountLdapSettingsDto
    {
        public bool EnableLdapLogin { get; set; }

        [Display(Name = "Abp.Ldap.ServerHost")]
        public string LdapServerHost { get; set; }

        [Display(Name = "Abp.Ldap.ServerPort")]
        public string LdapServerPort { get; set; }

        [Display(Name = "Abp.Ldap.BaseDc")]
        public string LdapBaseDc { get; set; }

        [Display(Name = "Abp.Ldap.UserName")]
        public string LdapUserName { get; set; }

        [Display(Name = "Abp.Ldap.LdapPassword")]
        public string LdapPassword { get; set; }
    }
}
