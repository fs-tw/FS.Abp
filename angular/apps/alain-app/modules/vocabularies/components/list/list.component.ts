import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Fs } from '@fs-tw/cms-kit-management/proxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'fs-tw-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  VocabulariesAdminService: Fs.CmsKitManagement.Vocabularies.VocabulariesApiService;
  public vocabularyDefinitionDatas$: Observable<any>;

  constructor(
    private readonly injector: Injector,
    private router: Router,
  ) {
    this.VocabulariesAdminService = injector.get(
      Fs.CmsKitManagement.Vocabularies.VocabulariesApiService
    );
   }

  ngOnInit(): void {
    this.vocabularyDefinitionDatas$ = this.VocabulariesAdminService.getListByVocabularyDefinitionGetList({} as any).pipe(
      map((json) => {
        return json.items.map((i) => {
          return {
            id: i.id,
            displayName: i.displayName,
          };
        });
      })
    );

  }

  showDetail(vocabulary: Fs.CmsKitManagement.Vocabularies.Dtos.VocabularyDefinitionDto) {
    if (vocabulary != null) {
      this.router.navigate(["/Vocabularies"], { queryParams: { Vocabulary: vocabulary.id, displayName: vocabulary.displayName } })
    }
  }
}
