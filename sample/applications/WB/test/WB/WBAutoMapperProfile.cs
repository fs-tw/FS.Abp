using AutoMapper;
using WB.Models;

namespace WB
{
    public class WBAutoMapperProfile : Profile
    {
        public WBAutoMapperProfile()
        {
            this.CreateMap<分析結果, 分析結果Info>();
            this.CreateMap<WB.一次過磅.分析結果, WB.一次過磅.分析結果Info>();
            //Define your AutoMapper configuration here for the Web project.
        }
    }
}
