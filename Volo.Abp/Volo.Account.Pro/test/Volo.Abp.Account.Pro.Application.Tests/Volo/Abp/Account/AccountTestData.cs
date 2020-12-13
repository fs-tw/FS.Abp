using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.Account.Pro.Application.Tests.Volo.Abp.Account
{
    public class AccountTestData : ISingletonDependency
    {
        public Guid RoleModeratorId { get; } = Guid.NewGuid();

        public Guid UserJohnId { get; } = Guid.NewGuid();
        public Guid UserDavidId { get; } = Guid.NewGuid();
        public Guid UserNeoId { get; } = Guid.NewGuid();
        public Guid AgeClaimId { get; } = Guid.NewGuid();
        public Guid EducationClaimId { get; } = Guid.NewGuid();
    }
}
