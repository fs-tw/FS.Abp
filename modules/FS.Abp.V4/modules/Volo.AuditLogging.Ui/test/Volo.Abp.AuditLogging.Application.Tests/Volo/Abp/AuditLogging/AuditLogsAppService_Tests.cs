using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Auditing;
using Volo.Abp.Guids;
using Xunit;

namespace Volo.Abp.AuditLogging.Application.Tests.Volo.Abp.AuditLogging
{
    public class AuditLogsAppService_Tests : AbpAuditLoggingTestBase<AbpAuditLoggingTestBaseModule>
    {
        private readonly IAuditLogsAppService _auditLogsAppService;
        private readonly IAuditLogRepository _auditLogRepository;
        private readonly IGuidGenerator _guidGenerator;

        public AuditLogsAppService_Tests()
        {
            _auditLogsAppService = GetRequiredService<IAuditLogsAppService>();
            _auditLogRepository = GetRequiredService<IAuditLogRepository>();
            _guidGenerator = GetRequiredService<IGuidGenerator>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Arrange
            var userId = new Guid("4456fb0d-74cc-4807-9eee-23e551e6cb06");
            var userId2 = new Guid("4456fb0d-74cc-4807-9eee-23e551e6cb06");
            var ipAddress = "153.1.7.61";
            var firstComment = "first Comment";

            var log1 = new AuditLogInfo
            {
                UserId = userId,
                ImpersonatorUserId = Guid.NewGuid(),
                ImpersonatorTenantId = Guid.NewGuid(),
                ExecutionTime = DateTime.Today,
                ExecutionDuration = 42,
                ClientIpAddress = ipAddress,
                ClientName = "MyDesktop",
                BrowserInfo = "Chrome",
                Comments = new List<string> { firstComment, "Second Comment" },
                UserName = "Douglas",
                EntityChanges = {
                    new EntityChangeInfo
                {
                    EntityId = Guid.NewGuid().ToString(),
                    EntityTypeFullName = "Volo.Abp.AuditLogging.TestEntity",
                    ChangeType = EntityChangeType.Created,
                    ChangeTime = DateTime.Now,
                    PropertyChanges = new List<EntityPropertyChangeInfo>
                    {
                        new EntityPropertyChangeInfo
                        {
                            PropertyTypeFullName = typeof(string).FullName,
                            PropertyName = "Name",
                            NewValue = "New value",
                            OriginalValue = null
                        }
                    }
                },
                    new EntityChangeInfo
                {
                    EntityId = Guid.NewGuid().ToString(),
                    EntityTypeFullName = "Volo.Abp.AuditLogging.TestEntity",
                    ChangeType = EntityChangeType.Created,
                    ChangeTime = DateTime.Now,
                    PropertyChanges = new List<EntityPropertyChangeInfo>
                    {
                        new EntityPropertyChangeInfo
                        {
                            PropertyTypeFullName = typeof(string).FullName,
                            PropertyName = "Name",
                            NewValue = "New value",
                            OriginalValue = null
                        }
                    }
                }

                }
            };

            var log2 = new AuditLogInfo
            {
                UserId = userId2,
                ImpersonatorUserId = Guid.NewGuid(),
                ImpersonatorTenantId = Guid.NewGuid(),
                ExecutionTime = DateTime.Today,
                ExecutionDuration = 42,
                ClientIpAddress = ipAddress,
                ClientName = "MyDesktop",
                BrowserInfo = "Chrome",
                Comments = new List<string> { firstComment, "Second Comment" },
                HttpStatusCode = (int?)HttpStatusCode.BadGateway,
                EntityChanges = {
                    new EntityChangeInfo
                    {
                        EntityId = Guid.NewGuid().ToString(),
                        EntityTypeFullName = "Volo.Abp.AuditLogging.TestEntity",
                        ChangeType = EntityChangeType.Created,
                        ChangeTime = DateTime.Now,
                        PropertyChanges = new List<EntityPropertyChangeInfo>
                        {
                            new EntityPropertyChangeInfo
                            {
                                PropertyTypeFullName = typeof(string).FullName,
                                PropertyName = "Name",
                                NewValue = "New value",
                                OriginalValue = null
                            }
                        }
                    }

                }
            };

            await _auditLogRepository.InsertAsync(new AuditLog(_guidGenerator, log1));
            await _auditLogRepository.InsertAsync(new AuditLog(_guidGenerator, log2));

            //Act
            var logs = await _auditLogsAppService.GetListAsync(new GetAuditLogListDto());

            // Assert
            logs.ShouldNotBeNull();
            logs.TotalCount.ShouldBe(2);
            logs.Items.ShouldContain(x => x.UserId == userId);
            logs.Items.ShouldContain(x => x.UserId == userId2);

        }


        [Fact]
        public async Task GetAsync()
        {
            // Arrange
            var userId = new Guid("4456fb0d-74cc-4807-9eee-23e551e6cb06");
            var ipAddress = "153.1.7.61";
            var firstComment = "first Comment";

            var log = new AuditLogInfo
            {
                UserId = userId,
                ImpersonatorUserId = Guid.NewGuid(),
                ImpersonatorTenantId = Guid.NewGuid(),
                ExecutionTime = DateTime.Today,
                ExecutionDuration = 42,
                ClientIpAddress = ipAddress,
                ClientName = "MyDesktop",
                BrowserInfo = "Chrome",
                Comments = new List<string> { firstComment, "Second Comment" },
                HttpStatusCode = (int?)HttpStatusCode.BadGateway,
                EntityChanges = {
                    new EntityChangeInfo
                    {
                        EntityId = Guid.NewGuid().ToString(),
                        EntityTypeFullName = "Volo.Abp.AuditLogging.TestEntity",
                        ChangeType = EntityChangeType.Created,
                        ChangeTime = DateTime.Now,
                        PropertyChanges = new List<EntityPropertyChangeInfo>
                        {
                            new EntityPropertyChangeInfo
                            {
                                PropertyTypeFullName = typeof(string).FullName,
                                PropertyName = "Name",
                                NewValue = "New value",
                                OriginalValue = null
                            }
                        }
                    }

                }
            };

            var logSave = await _auditLogRepository.InsertAsync(new AuditLog(_guidGenerator, log));

            // Act
            var logDto = await _auditLogsAppService.GetAsync(logSave.Id);

            // Assert
            logDto.ShouldNotBeNull();
            logDto.UserId.ShouldBe(userId);
        }

        [Fact]
        public async Task GetEntityChangeAsync()
        {
            // Arrange
            var userId = new Guid("4456fb0d-74cc-4807-9eee-23e551e6cb06");
            var ipAddress = "153.1.7.61";
            var firstComment = "first Comment";

            var log = new AuditLogInfo
            {
                UserId = userId,
                ImpersonatorUserId = Guid.NewGuid(),
                ImpersonatorTenantId = Guid.NewGuid(),
                ExecutionTime = DateTime.Today,
                ExecutionDuration = 42,
                ClientIpAddress = ipAddress,
                ClientName = "MyDesktop",
                BrowserInfo = "Chrome",
                Comments = new List<string> { firstComment, "Second Comment" },
                HttpStatusCode = (int?)HttpStatusCode.BadGateway,
                EntityChanges = {
                    new EntityChangeInfo
                    {
                        EntityId = Guid.NewGuid().ToString(),
                        EntityTypeFullName = "Volo.Abp.AuditLogging.TestEntity",
                        ChangeType = EntityChangeType.Deleted,
                        ChangeTime = DateTime.Now,
                        PropertyChanges = new List<EntityPropertyChangeInfo>
                        {
                            new EntityPropertyChangeInfo
                            {
                                PropertyTypeFullName = typeof(string).FullName,
                                PropertyName = "Name",
                                NewValue = "New value",
                                OriginalValue = null
                            }
                        }
                    },
                    new EntityChangeInfo
                    {
                        EntityId = Guid.NewGuid().ToString(),
                        EntityTypeFullName = "Volo.Abp.AuditLogging.TestEntity",
                        ChangeType = EntityChangeType.Created,
                        ChangeTime = DateTime.Now,
                        PropertyChanges = new List<EntityPropertyChangeInfo>
                        {
                            new EntityPropertyChangeInfo
                            {
                                PropertyTypeFullName = typeof(string).FullName,
                                PropertyName = "Name",
                                NewValue = "New value",
                                OriginalValue = null
                            }
                        }
                    }

                }
            };

            var logSave = await _auditLogRepository.InsertAsync(new AuditLog(_guidGenerator, log));

            // Act
            var entityChanges = (await _auditLogsAppService.GetEntityChangesAsync(new GetEntityChangesDto())).Items;

            var entityChange =
                await _auditLogsAppService.GetEntityChangeAsync(entityChanges.First().Id);

            // Assert
            entityChange.ShouldNotBeNull();
        }

        [Fact]
        public async Task GetEntityChangesListAsync()
        {
            // Arrange
            var userId = new Guid("4456fb0d-74cc-4807-9eee-23e551e6cb06");
            var ipAddress = "153.1.7.61";
            var firstComment = "first Comment";

            var log = new AuditLogInfo
            {
                UserId = userId,
                ImpersonatorUserId = Guid.NewGuid(),
                ImpersonatorTenantId = Guid.NewGuid(),
                ExecutionTime = DateTime.Today,
                ExecutionDuration = 42,
                ClientIpAddress = ipAddress,
                ClientName = "MyDesktop",
                BrowserInfo = "Chrome",
                Comments = new List<string> { firstComment, "Second Comment" },
                HttpStatusCode = (int?)HttpStatusCode.BadGateway,
                EntityChanges = {
                    new EntityChangeInfo
                    {
                        EntityId = Guid.NewGuid().ToString(),
                        EntityTypeFullName = "Volo.Abp.AuditLogging.TestEntity",
                        ChangeType = EntityChangeType.Created,
                        ChangeTime = DateTime.Now,
                        PropertyChanges = new List<EntityPropertyChangeInfo>
                        {
                            new EntityPropertyChangeInfo
                            {
                                PropertyTypeFullName = typeof(string).FullName,
                                PropertyName = "Name",
                                NewValue = "New value",
                                OriginalValue = null
                            }
                        }
                    }

                }
            };

            var logSave = await _auditLogRepository.InsertAsync(new AuditLog(_guidGenerator, log));

            // Act
            var entityChanges = await _auditLogsAppService.GetEntityChangesAsync(new GetEntityChangesDto());

            // Assert
            entityChanges.ShouldNotBeNull();
            entityChanges.TotalCount.ShouldBe(1);
        }
    }
}
