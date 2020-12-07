using System.Threading.Tasks;

namespace Volo.Saas.Editions
{
    public interface IEditionDataSeeder
    {
        Task CreateStandardEditionsAsync();
    }
}
