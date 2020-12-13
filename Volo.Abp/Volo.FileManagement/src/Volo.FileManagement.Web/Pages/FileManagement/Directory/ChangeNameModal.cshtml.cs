using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Volo.FileManagement.Directories;

namespace Volo.FileManagement.Web.Pages.FileManagement.Directory
{
    public class ChangeNameModalModel : FileManagementPageModel
    {
        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public Guid Id { get; set; }
        
        [BindProperty]
        public RenameDirectoryInput DirectoryDescriptor { get; set; }
        
        protected IDirectoryDescriptorAppService DirectoryDescriptorAppService { get; }

        public ChangeNameModalModel(IDirectoryDescriptorAppService directoryDescriptorAppService)
        {
            DirectoryDescriptorAppService = directoryDescriptorAppService;
        }
        
        public virtual async Task OnGetAsync()
        {
            var directoryDescriptorDto = await DirectoryDescriptorAppService.GetAsync(Id);

            DirectoryDescriptor = ObjectMapper.Map<DirectoryDescriptorDto, RenameDirectoryInput>(directoryDescriptorDto);
        }

        public virtual async Task OnPostAsync()
        {
            await DirectoryDescriptorAppService.RenameAsync(Id, DirectoryDescriptor);
        }
    }
}