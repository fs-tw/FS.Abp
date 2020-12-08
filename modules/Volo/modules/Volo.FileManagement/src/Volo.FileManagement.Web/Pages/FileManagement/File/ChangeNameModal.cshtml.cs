using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.Web.Pages.FileManagement.File
{
    public class ChangeNameModalModel : FileManagementPageModel
    {
        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public Guid Id { get; set; }
        
        [BindProperty]
        public RenameFileInput RenameFileInput { get; set; }
        
        protected IFileDescriptorAppService FileDescriptorAppService { get; }

        public ChangeNameModalModel(IFileDescriptorAppService fileDescriptorAppService)
        {
            FileDescriptorAppService = fileDescriptorAppService;
        }
        
        public virtual async Task OnGetAsync()
        {
            var fileDescriptorDto = await FileDescriptorAppService.GetAsync(Id);

            RenameFileInput = new RenameFileInput{ Name = fileDescriptorDto.Name };
        }

        public virtual async Task OnPostAsync()
        {
            await FileDescriptorAppService.RenameAsync(Id,RenameFileInput);
        }
    }
}