import { OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { PageService } from '../../providers/page.service';
import { Fs } from '@fs-tw/cms/proxy';
import { ToasterService } from '@abp/ng.theme.shared';
export declare class TagDetailComponent implements OnInit {
    private pageService;
    private location;
    private toasterService;
    isCreate: boolean;
    subscription: Subscription;
    deleteTargetTagIds: string[];
    data: Fs.Cms.Tags.Dtos.TagDto;
    constructor(pageService: PageService, location: Location, toasterService: ToasterService);
    inputList: Fs.Cms.Tags.Dtos.TagCreateDto[];
    ngOnDestroy(): void;
    ngOnInit(): void;
    addOption(): void;
    removeOption(index: number): void;
    removeOldOption(id: string): void;
    save(): void;
    update(): void;
    updateTags(): void;
    deleteTags(): void;
    create(): void;
    createTags(groupId: string): void;
    clear(): void;
}
