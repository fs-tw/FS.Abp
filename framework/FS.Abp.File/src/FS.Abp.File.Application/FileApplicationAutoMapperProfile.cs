using AutoMapper;
using FS.Abp.File.Directories.Dtos;

namespace FS.Abp.File
{
    public class FileApplicationAutoMapperProfile : Profile
    {
        public FileApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */

            this.CreateMap<Volo.FileManagement.Directories.DirectoryDescriptor, DirectoryDescriptorDto>();
        }
    }
}