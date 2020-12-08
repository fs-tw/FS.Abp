using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Volo.FileManagement.Directories;

namespace Volo.FileManagement.Web.Pages.FileManagement.Directory
{
    public class CreateModalModel : FileManagementPageModel
    {
        [BindProperty(SupportsGet = true)]
        public Guid? ParentId { get; set; }
        
        [BindProperty]
        public CreateDirectoryInput CreateDirectoryInput { get; set; }
        
        protected IDirectoryDescriptorAppService DirectoryDescriptorAppService { get; }

        public CreateModalModel(IDirectoryDescriptorAppService directoryDescriptorAppService)
        {
            DirectoryDescriptorAppService = directoryDescriptorAppService;
        }
        
        public virtual async Task OnGetAsync()
        {
            
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            CreateDirectoryInput.ParentId = ParentId;
            
            await DirectoryDescriptorAppService.CreateAsync(CreateDirectoryInput);
            
            return NoContent();
        }
    }
}