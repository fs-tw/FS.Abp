using System;

namespace YC.App
{
    internal class CounterState:Volo.Abp.DependencyInjection.ISingletonDependency
    {
        public int CurrentCount { get; private set; }

        public FS.Bsl.Pois.IPoisController Pois { get; set; }
        

        public CounterState(FS.Bsl.Pois.IPoisController pois)
        {
            Pois = pois;
        }

        public async System.Threading.Tasks.Task IncrementCount()
        {
            if ((await Pois.GetSearchPoi(new FS.Bsl.Pois.SearchPoiInput())).TotalCount == 0)
            {
                CurrentCount++;
            }

            StateChanged?.Invoke();
        }

        public event Action StateChanged;
    }
}
