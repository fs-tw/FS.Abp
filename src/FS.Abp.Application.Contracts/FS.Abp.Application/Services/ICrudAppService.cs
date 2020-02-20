using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Abp.Application.Services
{
    public interface ICrudAppService<TGetOutputDto, TGetListOutputDto, in TKey, in TGetListInput, in TCreateInput, in TUpdateInput>
        : IBaseCrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        where TGetOutputDto : IEntityDto<TKey>
        where TGetListOutputDto : IEntityDto<TKey>
    {
        Task<TGetOutputDto> GetAsync(TKey id);
    }


}
