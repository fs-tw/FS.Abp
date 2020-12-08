using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Users.EntityFrameworkCore;
using Volo.Chat.Users;

namespace Volo.Chat.EntityFrameworkCore.Users
{
    public class EfCoreChatUserRepository: EfCoreUserRepositoryBase<IChatDbContext, ChatUser>, IChatUserRepository
    {
        public EfCoreChatUserRepository(IDbContextProvider<IChatDbContext> dbContextProvider) 
            : base(dbContextProvider)
        {
        }
    }
}
