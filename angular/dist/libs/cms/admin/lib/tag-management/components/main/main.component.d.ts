import { OnInit } from '@angular/core';
import { PageService } from '../../providers/page.service';
import { Fs } from '@fs-tw/cms/proxy';
import { Subscription } from 'rxjs';
import { ConfirmationService } from '@abp/ng.theme.shared';
export declare class MainComponent implements OnInit {
    private PageService;
    private confirmation;
    tagGroupList: Fs.Cms.Tags.Dtos.TagDto[];
    subscription: Subscription;
    constructor(PageService: PageService, confirmation: ConfirmationService);
    ngOnInit(): void;
    deleteGroup(id: string): void;
    ngOnDestroy(): void;
}
