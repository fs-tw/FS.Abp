import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Fs } from '@fs-tw/cms-kit-management/proxy';
import { map } from 'rxjs/operators';
@Component({
  selector: 'fs-tw-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  VocabulariesAdminService: Fs.CmsKitManagement.Vocabularies.VocabulariesApiService;
  public vocabularyDatas$: Observable<any>;
  public vocabularyTreeDatas$: Observable<any>;
  subscription: Subscription;
  VocabularyId = "";
  VocabularydisplayName = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly injector: Injector,
  ) {
    this.VocabulariesAdminService = injector.get(
      Fs.CmsKitManagement.Vocabularies.VocabulariesApiService
    );
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe(x => {
      if (x.Vocabulary) {
        this.VocabularyId = x.Vocabulary
        this.VocabularydisplayName = x.displayName;
        /* console.log(this.VocabularyId,this.VocabularydisplayName) */
        this.getData(this.VocabularyId);
      }
    });
  }

  getData(DefinitionID: string): void {
    if (DefinitionID != null) {
      this.vocabularyDatas$ = this.VocabulariesAdminService.getListByVocabularyGetList({ maxResultCount: 999 } as any).pipe(
        map((json) => {
          return {
            totalCount: json.totalCount,
            items: json.items.map((i) => {
              return {
                key: i.id,
                displayName: i.displayName,
                definition: i.vocabularyDefinition.id,
                no: i.no,
              };
            }).filter(y => {
              return y.definition == DefinitionID
            })
          }
        }),
      );

      this.vocabularyTreeDatas$ = this.VocabulariesAdminService.getListByVocabularyGetList({ maxResultCount: 999 } as any).pipe(
        map((json) => {
          return {
            totalCount: json.totalCount,
            items: json.items.map((i) => {
              return {
                id: i.id,
                displayName: i.displayName,
                no: i.no,
                definition: i.vocabularyDefinition.id,
                level: i.level,
                parentId: i.parentId,
                expand: (i.level == 1) ? true : false,
              };
            })
          };
        }),
      );
      console.log(this.vocabularyTreeDatas$);
    }
  }

}
