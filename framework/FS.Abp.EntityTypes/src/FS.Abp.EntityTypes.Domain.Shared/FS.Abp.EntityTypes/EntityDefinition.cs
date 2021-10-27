using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace FS.Abp.EntityTypes
{

    public class EntityPropertyDefinition
    {
        public string Type { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
    }
    public abstract class EntityDefinition
    {
        public virtual string EntityType { get; set; }
        public Dictionary<string, EntityPropertyDefinition> CreateFormProps { get; }




        //private static readonly List<string> CreateDtoNames = new()
        //{
        //    "CreateUpdate{0}Dto",
        //    "Create{0}Dto",
        //    "CreateUpdate{0}Input",
        //    "Create{0}Input",
        //    "Create{0}InputDto"
        //};

        //private static readonly List<string> EditDtoNames = new()
        //{
        //    "CreateUpdate{0}Dto",
        //    "Update{0}Dto",
        //    "CreateUpdate{0}Input",
        //    "Update{0}Input",
        //    "CreateEdit{0}Dto",
        //    "Edit{0}Dto",
        //    "CreateEdit{0}Input",
        //    "CreateEdit{0}InputDto",
        //    "Edit{0}Input"
        //};

        //private static readonly List<string> ApplicationContractsNames = new()
        //{
        //    "{0}",
        //    "{0}.Admin"
        //};

        //protected string ModuleName { get; set; }
        //protected Assembly ApplicationContractsAssembly
        //{
        //    get
        //    {
        //        return AppDomain.CurrentDomain
        //            .GetAssemblies()
        //            .FirstOrDefault(x =>
        //                ApplicationContractsNames
        //                .Select(y => string.Format(y, ModuleName) + ".Application.Contracts")
        //                .Contains(x.GetName().Name));

        //        //.SingleOrDefault(x => x.GetName().Name == this.ModuleName + ".Application.Contracts");
        //    }
        //}


        //public string Name { get; set; }

        //private TypeInfo find(Assembly assembly, string entityName)
        //{
        //    var shortName = entityName.Substring(entityName.LastIndexOf('.') + 1);
        //    return assembly?.DefinedTypes.FirstOrDefault(x =>
        //                        CreateDtoNames.Select(y => string.Format(y, shortName)).Contains(x.Name));
        //}





        //public Dictionary<string, EntityPropertyDefinition> CreateFormProps
        //{
        //    get
        //    {
        //        var type = find(ApplicationContractsAssembly, Name);

        //        var result = new Dictionary<string, EntityPropertyDefinition>();

        //        var targetProperties = type.GetProperties().Select(p => p.Name)
        //            .Except(typeof(Volo.Abp.Domain.Entities.Auditing.FullAuditedAggregateRoot).GetProperties().Select(y => y.Name))
        //            .Except(typeof(Volo.Abp.MultiTenancy.IMultiTenant).GetProperties().Select(y => y.Name))
        //            .ToList();

        //        return type.GetProperties()
        //        .Where(x => targetProperties.Contains(x.Name))
        //        .Select(p =>
        //        {
        //            var item = new EntityPropertyDefinition()
        //            {
        //                Id = p.Name,
        //                DisplayName = p.Name,
        //                Name = p.Name,
        //                Type = p.PropertyType.FullName
        //            };
        //            return item;

        //        }).ToDictionary(x => x.Id, y => y);
        //    }
        //}

        //public Dictionary<string, EntityPropertyDefinition> EditFormProps
        //{
        //    get 
        //    {
        //        return null;
        //    }
        //}
        //public Dictionary<string, EntityPropertyDefinition> EntityProps { get; set; }

        //public EntityDefinition()
        //{

        //}

        //public EntityDefinition(string entityName)
        //{
        //    Assembly[] AssembliesLoaded = AppDomain.CurrentDomain.GetAssemblies();
        //    Type type = AssembliesLoaded.Select(assembly => assembly.GetType(entityName))
        //        .Where(type => type != null)
        //        .FirstOrDefault();

        //    ModuleName = type.Assembly.GetName().Name.Replace(".Domain", "");
        //    Name = type.FullName;

        //}


    }
}
