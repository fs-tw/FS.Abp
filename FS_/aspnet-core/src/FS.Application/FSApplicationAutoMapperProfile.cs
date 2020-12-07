using AutoMapper;
using FS.Users;
using Volo.Abp.AutoMapper;

namespace FS
{
    public class FSApplicationAutoMapperProfile : Profile
    {
        public FSApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */

            CreateMap<AppUser, AppUserDto>().Ignore(x => x.ExtraProperties);
        }
    }
}