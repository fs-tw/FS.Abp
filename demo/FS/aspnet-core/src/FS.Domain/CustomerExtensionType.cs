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
            customer.SetProperty(nameof(CustomerExtensionType.FirstName), firstName);
        }
        public static string GetFirstName(this Customers.Customer source)
        {
            return source.GetExtraProperty<string>(nameof(CustomerExtensionType.FirstName));
        }

        public static void SetLastName(this Customers.Customer source, string lastName)
        {
            source.SetProperty(nameof(CustomerExtensionType.LastName), lastName);
        }
        public static string GetLastName(this Customers.Customer source)
        {
            return source.GetExtraProperty<string>(nameof(CustomerExtensionType.LastName));
        }

        public static void SetContacts(this Customers.Customer source, List<Contact> contacts)
        {
            source.SetProperty(nameof(CustomerExtensionType.Contacts), contacts);
        }


        public static List<Contact> GetContacts(this Customers.Customer source, List<Contact> defaultValue = default)
        {
            return source.GetExtraProperty<List<Contact>>(nameof(CustomerExtensionType.Contacts));
        }

    }
}
