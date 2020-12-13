using AutoMapper;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement
{
    public class FileManagementDomainMappingProfile : Profile
    {
        public FileManagementDomainMappingProfile()
        {
            CreateMap<FileDescriptor, FileDescriptorEto>();
            CreateMap<DirectoryDescriptor, DirectoryDescriptorEto>();
        }
    }
}