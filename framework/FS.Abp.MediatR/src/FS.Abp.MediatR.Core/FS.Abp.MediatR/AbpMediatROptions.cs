using FS.Abp.MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Volo.Abp.Collections;

namespace Volo.Abp.MediatR
{
    public class AbpMediatROptions
    {

        public Dictionary<string, List<Assembly>> DicModules { get; set; }

        public AbpMediatROptions()
        {
            DicModules = new Dictionary<string, List<Assembly>>();
        }

        public void AddModule<TModule>(string module)
        {
            var assembly = typeof(TModule).Assembly;
            if (!DicModules.ContainsKey(module))
            {
                DicModules.Add(module, new List<Assembly>());
            }
            DicModules[module].AddIfNotContains(assembly);
        }

        public List<Type> QueryTypes
        {
            get
            {
                return DicModules
                .SelectMany(s => s.Value.SelectMany(t => t.GetTypes()))
                .Where(p => typeof(IQuery).IsAssignableFrom(p))
                .ToList();
            }
        }

        public List<Type> CommandTypes
        {
            get
            {
                return DicModules
                .SelectMany(s => s.Value.SelectMany(t => t.GetTypes()))
                .Where(p => typeof(ICommand).IsAssignableFrom(p))
                .ToList();
            }
        }

        public List<Type> MediatRTypes
        {
            get
            {
                return QueryTypes
                        .Concat(CommandTypes)
                        .ToList();
            }
        }

        public List<string> ModuleNames
        {
            get 
            {
                return this.DicModules.Keys.ToList();
            }
        }

        public List<Type> MediatRTypesOfModule(string moduleName)
        {
            if (!DicModules.ContainsKey(moduleName))
                return null;

            return this.DicModules[moduleName]
                .SelectMany(x => x.GetTypes())
                .Where(p => typeof(IQuery).IsAssignableFrom(p) || typeof(ICommand).IsAssignableFrom(p))
                .ToList();

        }

    }
}