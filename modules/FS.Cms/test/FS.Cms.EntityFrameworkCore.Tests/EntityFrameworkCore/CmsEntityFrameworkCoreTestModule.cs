﻿using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;
//using FS.Abp.CodingManagement.EntityFrameworkCore;
//using Volo.Abp.SettingManagement.EntityFrameworkCore;

namespace FS.Cms.EntityFrameworkCore
{
    [DependsOn(
        typeof(CmsTestBaseModule),
        typeof(CmsEntityFrameworkCoreModule)
        )]
    public class CmsEntityFrameworkCoreTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var sqliteConnection = CreateDatabaseAndGetConnection();

            Configure<AbpDbContextOptions>(options =>
            {
                options.Configure(abpDbContextConfigurationContext =>
                {
                    abpDbContextConfigurationContext.DbContextOptions.UseSqlite(sqliteConnection);
                });
            });
        }
        
        private static SqliteConnection CreateDatabaseAndGetConnection()
        {
            var connection = new SqliteConnection("Data Source=:memory:");
            connection.Open();

            new CmsDbContext(
                new DbContextOptionsBuilder<CmsDbContext>().UseSqlite(connection).Options
            ).GetService<IRelationalDatabaseCreator>().CreateTables();

            //new CodingManagementDbContext(
            //    new DbContextOptionsBuilder<CodingManagementDbContext>().UseSqlite(connection).Options
            //).GetService<IRelationalDatabaseCreator>().CreateTables();

            //new SettingManagementDbContext(
            //    new DbContextOptionsBuilder<SettingManagementDbContext>().UseSqlite(connection).Options
            //).GetService<IRelationalDatabaseCreator>().CreateTables();

            return connection;
        }
    }
}