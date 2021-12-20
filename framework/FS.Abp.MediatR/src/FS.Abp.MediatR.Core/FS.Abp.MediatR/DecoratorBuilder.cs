using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FS.Abp.MediatR
{
    public class DecoratorBuilder
    {
        private List<IBaseRequestDecorator> list { get; set; }

        public DecoratorBuilder()
        {
            list = new List<IBaseRequestDecorator>();
        }

        public static DecoratorBuilder From()
        {
            return new DecoratorBuilder();
        }

        public DecoratorBuilder Decorator<T>(Action<T> action = null)
            where T : IBaseRequestDecorator, new()
        {
            var result = new T();

            action?.Invoke(result);

            if (list.LastOrDefault() != null)
            {
                list.LastOrDefault().Peer = result;
            }

            list.Add(result);

            return this;
        }

        public IBaseRequest Build<T>(Action<T> action = null)
            where T : IBaseRequest, new()
        {
            var result = new T();

            action?.Invoke(result);

            if (list.LastOrDefault() != null)
            {
                list.LastOrDefault().Peer = result;
            }

            return list.FirstOrDefault();
        }
    }
}
