using System.Threading.Tasks;

namespace Volo.Abp.Account.Public.Web.ProfileManagement
{
    public interface IProfileManagementPageContributor
    {
        Task ConfigureAsync(ProfileManagementPageCreationContext context);
    }
}
