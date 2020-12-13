import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UpdateStreamService {
  private contentUpdate = new Subject();
  readonly contentUpdate$ = this.contentUpdate.asObservable();
  private directoryUpdate = new Subject();
  readonly directoryUpdate$ = this.directoryUpdate.asObservable();

  updateContent = () => {
    this.contentUpdate.next();
  };

  updateDirectory = () => {
    this.directoryUpdate.next();
  };

  updateContentAndDirectory = () => {
    this.updateContent();
    this.updateDirectory();
  };
}
