import { Fs, Volo } from '@fs-tw/entity-type-management/proxy/entity-types';
import { map } from "rxjs/operators";
import { Injectable, Injector } from "@angular/core";
import { AbstractNavTreeService } from '@abp/ng.core';
import { Observable } from 'rxjs';

export class EntityTypeInfo implements Fs.Abp.EntityTypes.EntityType {
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
export class EntityTypeService extends AbstractNavTreeService<EntityTypeInfo> {
    constructor(injector: Injector) {
        super(injector);
        this.add([]);
    }

    reset() {
        this.remove(
            this.flat.map(item => { return item.name })
        );
    }

    getAllEntityType$(): Observable<EntityTypeInfo[]> {
        return this.flat$;
    }

    getEntityTypeByType$(entityType: string): Observable<EntityTypeInfo[]> {
        return this.flat$.pipe(map(x =>
            x.filter(y => y.definitions.find(z => z.entityType == entityType)
        )));
    }

    getFeatureByName$(featureName: string): Observable<EntityTypeInfo[]> {
        return this.flat$.pipe(map(x => x.filter(y =>
            y.name == featureName
        )));
    }

    setData(data: Array<EntityTypeInfo>) {
        this.add(data);
    }
}