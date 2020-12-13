using Volo.Abp.Uow;
using Volo.Abp.Users;

namespace Volo.Chat.Users
{
    public class ChatUserLookupService : UserLookupService<ChatUser, IChatUserRepository>, IChatUserLookupService
    {
        public ChatUserLookupService(
            IChatUserRepository userRepository,
            IUnitOfWorkManager unitOfWorkManager)
            : base(
                userRepository,
                unitOfWorkManager)
        {

        }

        protected override ChatUser CreateUser(IUserData externalUser)
        {
            return new ChatUser(externalUser);
        }
    }
}
