using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Http.Modeling;
using FS.Abp.MediatR;
using Volo.Abp.Reflection;

namespace FS.Abp.AspNetCore.Mvc
{
    public class ControllersInfo
    {
        private readonly List<Type> requestType;
        public ControllersInfo(List<Type> types)
        {
            this.requestType = types;
        }



        protected List<string> Namespaces
        {
            get
            {
                return this.requestType.Select(x => x.Namespace).Distinct().ToList();
            }
        }

        public List<ControllerApiDescriptionModel> Controllers
        {
            get
            {
                return this.Namespaces.Select(x =>
                {
                    var names = x.Split('.').Reverse().Take(2);
                    var controllerName = string.Join("", names) + "Api";
                    var typeName = controllerName.Substring(controllerName.LastIndexOf(".") + 1);
                    ControllerApiDescriptionModel item = new ControllerApiDescriptionModel()
                    {
                        ControllerName = controllerName,
                        Type = $"{x}.{typeName}",
                        Actions =
                        NamespaceTypes[x].ToList().Select(x =>
                        {
                            return new ActionInfo(x).Action;
                        }).ToDictionary(x => x.UniqueName, y => y)
                    };
                    return item;
                }).ToList();
            }
        }

        protected Dictionary<string, List<Type>> NamespaceTypes
        {
            get
            {
                return this.requestType.GroupBy(x => x.Namespace, y => y)
                    .ToDictionary(x => x.Key, y => y.ToList());
            }
        }
    }

    public class ActionInfo
    {
        private readonly Type requestType;
        public ActionInfo(Type type)
        {
            this.requestType = type;
        }
        protected string Namespace
        {
            get
            {
                return requestType.Namespace;
            }
        }
        protected string Name
        {
            get
            {
                return requestType.Name;
            }
        }
        protected string Type
        {
            get
            {
                return TypeHelper.GetFullNameHandlingNullableAndGenerics(RequestType);
            }
        }

        protected string TypeSimple
        {
            get
            {
                return ApiTypeNameHelper.GetSimpleTypeName(RequestType);
            }
        }

        protected string MethodName
        {
            get
            {
                if (typeof(IQuery).IsAssignableFrom(requestType))
                {
                    return "query";
                }
                else if (typeof(ICommand).IsAssignableFrom(requestType))
                {
                    return "command";
                }
                return "";
            }
        }

        protected ParameterApiDescriptionModel Parameter
        {
            get
            {
                return new ParameterApiDescriptionModel()
                {
                    Name = MethodName,
                    NameOnMethod = $"{{...{MethodName},...{{$type:'{Type}'}}}}",
                    Type = Type,
                    TypeSimple = TypeSimple,
                    BindingSourceId = "Body"
                };
            }
        }
        protected MethodParameterApiDescriptionModel MethodParameter
        {
            get
            {
                return new MethodParameterApiDescriptionModel()
                {
                    Name = MethodName,
                    Type = Type,
                    TypeSimple = TypeSimple,
                    TypeAsString = TypeSimple,
                };
            }
        }

        protected Type RequestType
        {
            get
            {
                return requestType;
            }
        }
        protected Type ResponseType
        {
            get
            {
                var outputInterface = Volo.Abp.Reflection.ReflectionHelper
                .GetImplementedGenericTypes(requestType, typeof(global::MediatR.IRequest<>));

                if (outputInterface != null)
                {
                    return outputInterface.FirstOrDefault().GetGenericArguments().FirstOrDefault();
                }
                return typeof(object);
            }
        }

        public ActionApiDescriptionModel Action
        {
            get
            {
                return new ActionApiDescriptionModel()
                {
                    HttpMethod = "POST",
                    Url = $"api/mediator/{MethodName}?$type={this.TypeSimple}",
                    Name = this.Name,
                    UniqueName = this.Name,
                    ReturnValue = ReturnValueApiDescriptionModel.Create(this.ResponseType),
                    Parameters = new List<ParameterApiDescriptionModel>()
                    {
                        Parameter
                    },
                    ParametersOnMethod = new List<MethodParameterApiDescriptionModel>()
                    {
                        MethodParameter
                    }
                };
            }
        }
    }
}
