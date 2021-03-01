using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.Authentication.MongoDB
{
    [ConnectionStringName(AuthenticationDbProperties.ConnectionStringName)]
    public class AuthenticationMongoDbContext : AbpMongoDbContext, IAuthenticationMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureAuthentication();
        }
    }
}