using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.CodingManagement.Coding
{
    public class AsyncLocalCurrentCodesAccessor : ICurrentCodesAccessor, ISingletonDependency
    {
        public BasicCodesInfo Current
        {
            get => _currentScope.Value;
            set => _currentScope.Value = value;
        }

        private readonly AsyncLocal<BasicCodesInfo> _currentScope;

        public AsyncLocalCurrentCodesAccessor()
        {
            _currentScope = new AsyncLocal<BasicCodesInfo>();
        }
    }
    public class CurrentCodes : ICurrentCodes, ITransientDependency
    {
        public Guid? Id => _currentRoomTypeAccessor.Current?.CodesId;

        public string Name => _currentRoomTypeAccessor.Current?.Name;

        private readonly ICurrentCodesAccessor _currentRoomTypeAccessor;

        public CurrentCodes(ICurrentCodesAccessor currentRoomTypeAccessor)
        {
            _currentRoomTypeAccessor = currentRoomTypeAccessor;
        }
        public IDisposable Change(Guid? id, string name = null)
        {
            return SetCurrent(id, name);
        }
        private IDisposable SetCurrent(Guid? codesId, string name = null)
        {
            var parentScope = _currentRoomTypeAccessor.Current;
            _currentRoomTypeAccessor.Current = new BasicCodesInfo(codesId, name);
            return new DisposeAction(() =>
            {
                _currentRoomTypeAccessor.Current = parentScope;
            });
        }
    }
}
