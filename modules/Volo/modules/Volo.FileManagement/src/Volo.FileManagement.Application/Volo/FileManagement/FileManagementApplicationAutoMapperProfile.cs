using AutoMapper;
using Volo.Abp.AutoMapper;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement
{
    public class FileManagementApplicationAutoMapperProfile : Profile
    {
        public FileManagementApplicationAutoMapperProfile()
        {
            CreateMap<DirectoryDescriptor, DirectoryDescriptorDto>();
            CreateMap<DirectoryDescriptorDto, RenameDirectoryInput>();
            
            CreateMap<FileDescriptor, FileDescriptorDto>();
        }
    }
}