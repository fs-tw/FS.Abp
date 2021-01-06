import { OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
export declare class EditVocabularyComponent implements OnInit {
    private modalService;
    data: any;
    groupoTitle: string;
    modal: NzModalRef;
    _data: any;
    inputList: {
        name: string;
    }[];
    constructor(modalService: NzModalService);
    ngOnInit(): void;
    createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void;
    addOption(): void;
    removeOption(index: number): void;
    save(): void;
    close(): void;
}
