import { Fs } from '@fs-tw/core/proxy/entity-features';
import { map } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { AbstractNavTreeService } from '@abp/ng.core';
import { combineLatest, forkJoin, Observable } from 'rxjs';

export class EntityFeature implements Fs.Abp.EntityFeatures.EntityFeature {
  name: string;
  definitions: Array<Fs.Abp.EntityFeatures.EntityFeatureDefinition>;

  constructor(
    name: string,
    definitions: Array<Fs.Abp.EntityFeatures.EntityFeatureDefinition>
  ) {
    this.name = name;
    this.definitions = definitions;
  }
}

@Injectable({ providedIn: 'root' })
export class EntityFeaturesStore extends AbstractNavTreeService<EntityFeature> {
  constructor(injector: Injector) {
    super(injector);
    this.add([]);
  }

  reset() {
    this.remove(
      this.flat.map((item) => {
        return item.name;
      })
    );
  }

  getAllEntityType$(): Observable<EntityFeature[]> {
    return this.flat$;
  }

  getAllEntityType(): EntityFeature[] {
    return this.flat;
  }

  getEntityTypeByType$(entityType: string, shortEntityType: string = null): Observable<EntityFeature[]> {
    return this.flat$.pipe(
      map((x) => {
        let result = x.filter((y) =>
          y.definitions.find((z) => z.entityType == entityType || z.entityType == shortEntityType)
        );
        return result;
      })
    );
  }

  getFeatureByName$(featureName: string): Observable<EntityFeature[]> {
    return this.flat$.pipe(map((x) => x.filter((y) => y.name == featureName)));
  }

}
