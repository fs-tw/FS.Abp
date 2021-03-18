import { Fs } from '@fs-tw/form-management/proxy';
import { eFormmanagementRouteNames } from '../enums/route-names';
import { Subject } from 'rxjs';
export declare class ActionItem<T> {
    name: 'Edit' | 'Delete' | 'Add';
    record?: T;
}
export declare class ExtensionsService {
    Actions$: {
        "FormManagement::FS.DocumentDefinition": Subject<ActionItem<Fs.FormManagement.Documents.Dtos.DocumentDefinitionDto>>;
        "FormManagement::FS.Formal": Subject<ActionItem<Fs.FormManagement.Forms.Dtos.FormalDto>>;
        "FormManagement::FS.Group": Subject<ActionItem<Fs.FormManagement.Forms.Dtos.GroupDto>>;
        "FormManagement::FS.Item": Subject<ActionItem<Fs.FormManagement.Forms.Dtos.ItemDto>>;
        "FormManagement::FS.Record": Subject<ActionItem<Fs.FormManagement.Records.Dtos.RecordDto>>;
        "FormManagement::FS.RecordItem": Subject<ActionItem<Fs.FormManagement.Records.Dtos.RecordItemDto>>;
        "FormManagement::FS.Version": Subject<ActionItem<Fs.FormManagement.Documents.Dtos.VersionDto>>;
    };
    constructor();
    action<T>(type: eFormmanagementRouteNames, data?: ActionItem<T>): void;
}
