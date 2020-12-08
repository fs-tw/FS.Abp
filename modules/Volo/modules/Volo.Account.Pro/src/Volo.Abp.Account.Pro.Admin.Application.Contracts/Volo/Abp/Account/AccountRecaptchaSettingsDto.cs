using System.ComponentModel.DataAnnotations;

namespace Volo.Abp.Account
{
    public class AccountRecaptchaSettingsDto
    {
        public bool UseCaptchaOnLogin { get; set; }

        public bool UseCaptchaOnRegistration { get; set; }

        public string VerifyBaseUrl { get; set; }

        public string SiteKey { get; set; }

        public string SiteSecret { get; set; }

        [Range(2,3)]
        public int Version { get; set; }

    }
}
