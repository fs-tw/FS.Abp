import { Fs, Volo } from '@fs-tw/entity-type-management/proxy/entity-types';
import { map } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { AbstractNavTreeService } from '@abp/ng.core';
import { combineLatest, forkJoin, Observable } from 'rxjs';

export class EntityType implements Fs.Abp.EntityTypes.EntityType {
  name: string;
  definitions: Array<Volo.CmsKit.EntityTypeDefinition>;

  constructor(
    name: string,
    definitions: Array<Volo.CmsKit.EntityTypeDefinition>
  ) {
    this.name = name;
    this.definitions = definitions;
  }
}

@Injectable({ providedIn: 'root' })
export class EntityTypeStore extends AbstractNavTreeService<EntityType> {
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

  getAllEntityType$(): Observable<EntityType[]> {
    return this.flat$;
  }

  getAllEntityType(): EntityType[] {
    return this.flat;
  }

  getEntityTypeByType$(entityType: string, shortEntityType: string = null): Observable<EntityType[]> {
    return this.flat$.pipe(
      map((x) => {
        let result = x.filter((y) =>
          y.definitions.find((z) => z.entityType == entityType || z.entityType == shortEntityType)
        );
        return result;
      })
    );
  }

  getFeatureByName$(featureName: string): Observable<EntityType[]> {
    return this.flat$.pipe(map((x) => x.filter((y) => y.name == featureName)));
  }

}
