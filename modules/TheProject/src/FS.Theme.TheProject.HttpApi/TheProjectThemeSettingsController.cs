using FS.Theme.TheProject.Localization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Theme.TheProject
{
    [RemoteService(Name = TheProjectRemoteServiceConsts.RemoteServiceName)]
    [Area(TheProjectRemoteServiceConsts.RemoteServiceName)]
    [Route("api/theme-the-project/settings")]
    [ControllerName("FS.Theme.TheProject(" + TheProjectRemoteServiceConsts.RemoteServiceName + ")")]
    public class TheProjectThemeSettingsController : AbpController, ITheProjectThemeSettingsAppService
    {
        private readonly ITheProjectThemeSettingsAppService theProjectThemeSettingsAppService;

        public TheProjectThemeSettingsController(ITheProjectThemeSettingsAppService theProjectThemeSettingsAppService)
        {
            this.theProjectThemeSettingsAppService = theProjectThemeSettingsAppService;
        }

        [HttpGet]
        public Task<TheProjectThemeSettingsDto> GetAsync()
        {
            return theProjectThemeSettingsAppService.GetAsync();
        }

        [HttpPut]
        public Task UpdateAsync(UpdateTheProjectThemeSettingsDto input)
        {
            return theProjectThemeSettingsAppService.UpdateAsync(input);
        }
    }
}
