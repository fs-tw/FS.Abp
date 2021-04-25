using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace FS
{
    public class FSTestDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        public FS.Customers.ICustomersStore CustomersStore { get; set; }
        public async Task SeedAsync(DataSeedContext context)
        {

            //FS.Customers.Enterprise e = new Customers.Enterprise()
            //{
            //    Email = "CompanyNameEmail",
            //    CompanyName = "CompanyName",
            //    Phone= "EnterprisePhone"
            //};

            //FS.Customers.Person p = new Customers.Person()
            //{
            //    Email = "PersonEmail",
            //    Phone = "PersonPhone"
            //};

            //await CustomersStore.Customer.InsertAsync(e);
            //await CustomersStore.Customer.InsertAsync(p);
        }
    }
}