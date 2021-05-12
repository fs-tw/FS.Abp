using AutoMapper;
using DEMO.Users;
using Volo.Abp.AutoMapper;

namespace DEMO
{
    public class DEMOApplicationAutoMapperProfile : Profile
    {
        public DEMOApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */

            CreateMap<AppUser, AppUserDto>().Ignore(x => x.ExtraProperties);
        }
    }
}