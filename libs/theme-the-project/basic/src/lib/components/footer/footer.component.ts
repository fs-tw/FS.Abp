import { Component, OnInit } from '@angular/core';
// import { ThemeCoreStateService, FileService } from '@fs/theme.core';
// import * as $ from 'jquery';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
// import { ThemeDto } from '@fs/theme.core/proxy';
// import { ThemeState } from '@fs/theme.core';
@Component({
  selector: 'fs-the-project-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  // @Select(ThemeState.getTheme)
  // data$: Observable<ThemeDto>;
  
  constructor(
    // private themeCoreStateService: ThemeCoreStateService,
    // private themeCoreService: FileService,
  ) { }

  ngOnInit(): void {
    
  }


}
