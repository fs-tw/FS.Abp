using FS.Abp.Coding;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.EntitySettings
{
    public class AsyncLocalCurrentEntitySettingAccessor : ICurrentEntitySettingAccessor, ISingletonDependency
    {
        public BasicEntitySettingInfo Current
        {
            get => _currentScope.Value;
            set => _currentScope.Value = value;
        }

        private readonly AsyncLocal<BasicEntitySettingInfo> _currentScope;

        public AsyncLocalCurrentEntitySettingAccessor()
        {
            _currentScope = new AsyncLocal<BasicEntitySettingInfo>();
        }
    }
    public class CurrentEntitySetting : ICurrentEntitySetting, ITransientDependency
    {
        public Guid? Id => _currentEntitySettingAccessor.Current?.CodesId;

        public string Name => _currentEntitySettingAccessor.Current?.Name;

        private readonly ICurrentEntitySettingAccessor _currentEntitySettingAccessor;

        public CurrentEntitySetting(ICurrentEntitySettingAccessor currentEntitySettingAccessor)
        {
            _currentEntitySettingAccessor = currentEntitySettingAccessor;
        }
        public IDisposable Change<T>(Guid? id)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var parentScope = _currentEntitySettingAccessor.Current;
            _currentEntitySettingAccessor.Current = new BasicEntitySettingInfo(id, typeof(T).FullName);
            return new DisposeAction(() =>
            {
                _currentEntitySettingAccessor.Current = parentScope;
            });
        }

        public override string ToString()
        {
            return $"{Name}-{Id}";
        }
    }
}
