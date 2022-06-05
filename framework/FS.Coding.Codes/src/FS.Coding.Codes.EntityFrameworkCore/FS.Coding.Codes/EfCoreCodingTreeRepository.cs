using System;
using System.Linq;
using System.Collections.Generic;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace FS.Coding.Codes.EntityFrameworkCore
{
    public partial class EfCoreCodingTreeRepository
    {
        public async Task<Coding> FindByNoAsync(string no)
        {
            var query = (await this.GetQueryableAsync()).Where(x => x.No == no);
            var result = await query.SingleOrDefaultAsync();
            return result;
        }
    }
}
