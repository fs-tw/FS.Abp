using System;
using System.Collections.Generic;
using System.Text;

namespace FS
{
    public class CustomerExtension
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<Contact> Contacts { get; set; }

    }

    public class Contact
    {
        public string Phone { get; set; }
        public string Address { get; set; }
    }
}
