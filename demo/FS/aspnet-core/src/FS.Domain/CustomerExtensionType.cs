using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Volo.Abp.Data;

namespace FS
{
    public static class CustomerExtensions
    {
        public static void SetFirstName(this Customers.Customer customer, string firstName)
        {
            customer.SetProperty(nameof(CustomerExtension.FirstName), firstName);
        }
        public static string GetFirstName(this Customers.Customer source)
        {
            return source.GetExtraProperty<string>(nameof(CustomerExtension.FirstName));
        }

        public static void SetLastName(this Customers.Customer source, string lastName)
        {
            source.SetProperty(nameof(CustomerExtension.LastName), lastName);
        }
        public static string GetLastName(this Customers.Customer source)
        {
            return source.GetExtraProperty<string>(nameof(CustomerExtension.LastName));
        }

        public static void SetContacts(this Customers.Customer source, List<Contact> contacts)
        {
            source.SetProperty(nameof(CustomerExtension.Contacts), contacts);
        }


        public static List<Contact> GetContacts(this Customers.Customer source, List<Contact> defaultValue = default)
        {
            return source.GetExtraProperty<List<Contact>>(nameof(CustomerExtension.Contacts));
        }

    }
}
