namespace Volo.Abp.Account.Public.Web.Areas.Account.Controllers.Models
{
    public enum LoginResultType : byte
    {
        Success = 1,

        InvalidUserNameOrPassword = 2,

        NotAllowed = 3,

        LockedOut = 4,

        RequiresTwoFactor = 5,

        NotLinked = 6
    }
}
