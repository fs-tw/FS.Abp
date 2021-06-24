//using FS.Customers.Querys.Customers;
//using MediatR;
//using FS.Customers.Commands.Customers;
//using FS.Abp.MediatR;

//namespace FS.Customers
//{
//    public partial class JsonSubtypesConverterProfile : FS.Abp.AspNetCore.Mvc.JsonSubTypes.JsonSubtypesConverterProfile
//    {
//        public JsonSubtypesConverterProfile()
//        {
//            this.CreateJsonSubtypesConverter<IQuery>("$type")
//                .RegisterSubtype<Query>()
//                ;

//            this.CreateJsonSubtypesConverter<IQuery>("$type")
//                .RegisterSubtype<FindQuery>();

//            this.CreateJsonSubtypesConverter<ICommand>("$type")
//                .RegisterSubtype<CreateCommand>()
//                .RegisterSubtype<UpdateCommand>()
//                ;




//        }
//    }

//}
