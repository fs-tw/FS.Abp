using System;
using Volo.Chat.EntityFrameworkCore;

namespace Volo.Chat
{
    /* Inherit from this class for your domain layer tests.
     * See SampleManager_Tests for example.
     */
    public abstract class ChatDomainTestBase : ChatTestBase<ChatDomainTestModule>
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