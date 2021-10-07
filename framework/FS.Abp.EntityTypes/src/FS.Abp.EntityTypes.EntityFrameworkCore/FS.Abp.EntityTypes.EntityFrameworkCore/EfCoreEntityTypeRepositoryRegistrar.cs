using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Reflection;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{
    public class EfCoreEntityTypeRepositoryRegistrar
    {
        public AbpEntityTypeRepositoryRegistrationOptions Options { get; }

        public EntityTypeOption EntityTypeOptions { get; set; }
        public EfCoreEntityTypeRepositoryRegistrar(AbpEntityTypeRepositoryRegistrationOptions options)
        {
            Options = options;

            EntityTypeOptions = Options.Services.ExecutePreConfiguredActions<EntityTypeOption>();
            //using (var provider = Options.Services.BuildServiceProvider())
            //{
            //    EntityTypeOptions = provider.GetRequiredService<IOptions<EntityTypeOptions>>().Value;
            //}

        }

        public void AddCustomRepositories()
        {

        }

        public void AddRepositories()
        {
            foreach (var entityType in
                GetEntityTypes(Options.OriginalDbContextType)
                .Where(t => EntityTypeOptions.Contains(t)))
            {
                RegisterDefaultRepository(entityType);
            }
        }

        protected void RegisterDefaultRepository(Type entityType)
        {
            var entities = EntityTypeOptions.GetOrNull(entityType).GetList().Select(x => x.Key).ToList();

            var primaryKeyType = EntityHelper.FindPrimaryKeyType(entityType);

            entities.ForEach(entity =>
            {
                var repositoryImplementationType = GetDefaultRepositoryImplementationType(entityType, entity, primaryKeyType);

                var repositoryInterface = typeof(IEntityTypeRepository<,,>).MakeGenericType(entityType, entity, primaryKeyType);
                if (repositoryInterface.IsAssignableFrom(repositoryImplementationType))
                {
                    Options.Services.TryAddTransient(repositoryInterface, repositoryImplementationType);
                }

                repositoryInterface = typeof(IEntityTypeRepository<,>).MakeGenericType(entityType, entity);
                if (repositoryInterface.IsAssignableFrom(repositoryImplementationType))
                {
                    Options.Services.TryAddTransient(repositoryInterface, repositoryImplementationType);
                }
            });

        }

        protected Type GetDefaultRepositoryImplementationType(Type entityType, Type entity, Type primaryKeyType)
        {
            return typeof(EfCoreEntityTypeRepository<,,,>).MakeGenericType(Options.DefaultRepositoryDbContextType, entityType, entity, primaryKeyType);
        }

        protected IEnumerable<Type> GetEntityTypes(Type dbContextType)
        {
            return
                from property in dbContextType.GetTypeInfo().GetProperties(BindingFlags.Public | BindingFlags.Instance)
                where
                    ReflectionHelper.IsAssignableToGenericType(property.PropertyType, typeof(DbSet<>)) &&
                    typeof(IEntity).IsAssignableFrom(property.PropertyType.GenericTypeArguments[0])
                select property.PropertyType.GenericTypeArguments[0];
        }
    }
}
