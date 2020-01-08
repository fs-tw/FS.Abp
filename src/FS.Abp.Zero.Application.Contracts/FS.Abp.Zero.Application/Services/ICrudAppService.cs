using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Abp.Application.Services
{
    public interface ICrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput> 
        : Volo.Abp.Application.Services.ICrudAppService<TGetOutputDto, TGetListOutputDto,TKey,TGetListInput,TCreateInput,TUpdateInput>
        where TGetOutputDto : IEntityDto<TKey>
        where TGetListOutputDto : IEntityDto<TKey>
    {
        Task<PagedResultDto<TGetOutputDto>> GetListWithDetailsAsync(TGetListInput input);
    }
}