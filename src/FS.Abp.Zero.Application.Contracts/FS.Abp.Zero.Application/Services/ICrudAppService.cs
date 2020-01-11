using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Abp.Application.Services
{
    public interface ICrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TFind, TGetListInput, TCreateInput, TUpdateInput>
        : IBaseCrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        where TGetOutputDto : IEntityDto
        where TGetListOutputDto : IEntityDto
    {
        Task<TGetOutputDto> GetFindAsync(TFind key);
    }
    public interface ICrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        : IBaseCrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        where TGetOutputDto : IEntityDto
        where TGetListOutputDto : IEntityDto
    {
        Task<TGetOutputDto> GetAsync(TKey id);
    }


    public interface IBaseCrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        where TGetOutputDto : IEntityDto
        where TGetListOutputDto : IEntityDto
    {
        Task<PagedResultDto<TGetOutputDto>> GetListWithDetailsAsync(TGetListInput input);
        Task<TGetOutputDto> CreateAsync(TCreateInput input);
        Task DeleteAsync(TKey id);
        Task<PagedResultDto<TGetListOutputDto>> GetListAsync(TGetListInput input);
        Task<TGetOutputDto> UpdateAsync(TKey id, TUpdateInput input);
    }
}