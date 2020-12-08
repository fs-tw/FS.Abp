using System.Threading.Tasks;
using Volo.Abp.LeptonTheme.Management;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme
{
    public interface ILeptonSettingsProvider
    {
        Task<bool> IsBoxedAsync();

        Task<MenuPlacement> GetMenuPlacementAsync();

        Task<MenuStatus> GetMenuStatusAsync();

        Task<LeptonStyle> GetStyleAsync();
    }
}
