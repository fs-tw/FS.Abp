using System;
using Volo.Abp.DependencyInjection;

namespace Volo.Chat
{
    public class ChatTestData : ISingletonDependency
    {
        public Guid User1Id { get; } = Guid.NewGuid();

        public Guid User2Id { get; } = Guid.NewGuid();

        public Guid User3Id { get; } = Guid.NewGuid();

        public string User2UserName { get; } = "User2";

        public string User2Name { get; } = "SampleName";

        public string ConversationSampleMessage1 { get; } = "Good bye!";
    }
}
