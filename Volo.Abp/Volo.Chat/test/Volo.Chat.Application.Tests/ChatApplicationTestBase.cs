using System;
using Volo.Chat.EntityFrameworkCore;

namespace Volo.Chat
{
    public abstract class ChatApplicationTestBase : ChatTestBase<ChatApplicationTestModule>
    {

        protected virtual void UsingDbContext(Action<IChatDbContext> action)
        {
            using (var dbContext = GetRequiredService<IChatDbContext>())
            {
                action.Invoke(dbContext);
            }
        }

        protected virtual T UsingDbContext<T>(Func<IChatDbContext, T> action)
        {
            using (var dbContext = GetRequiredService<IChatDbContext>())
            {
                return action.Invoke(dbContext);
            }
        }
    }
}