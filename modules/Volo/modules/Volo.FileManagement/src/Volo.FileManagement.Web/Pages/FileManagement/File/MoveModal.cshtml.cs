using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.Web.Pages.FileManagement.File
{
    public class MoveModalModel : FileManagementPageModel
    {
        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public Guid Id { get; set; }
        
        [BindProperty]
        public MoveFileInput MoveFileInput { get; set; }
        
        protected IFileDescriptorAppService FileDescriptorAppService { get; }

        public MoveModalModel(IFileDescriptorAppService fileDescriptorAppService)
        {
            FileDescriptorAppService = fileDescriptorAppService;
        }
        
        public virtual async Task OnGetAsync()
        {
            var fileDescriptorDto = await FileDescriptorAppService.GetAsync(Id);
            MoveFileInput = new MoveFileInput();
            
            MoveFileInput.Id = fileDescriptorDto.Id;
            MoveFileInput.NewDirectoryId = null;
        }

        public virtual async Task OnPostAsync()
        {
            await FileDescriptorAppService.MoveAsync(MoveFileInput);
        }
    }
}