// import { Injectable } from '@angular/core';
// import { Fs } from '@fs-tw/appt/proxy';
// import { eCmsRouteNames } from '../enums/route-names';
// import { Subject } from 'rxjs';
// export class ActionItem<T> {
//   name: 'Edit' | 'Delete' | 'Add';
//   record?: T;
// }
// @Injectable({
//   providedIn: 'root',
// })
// export class ExtensionsService {
//   public Actions$ = {
//     [eCmsRouteNames.Blog]: new Subject<
//       ActionItem<Fs.Appt.Core.Dtos.CustomerDto>
//     >(),
//     [eCmsRouteNames.Post]: new Subject<
//       ActionItem<Fs.Appt.Core.Dtos.AreaDto>
//     >(),
//     [eCmsRouteNames.tag]: new Subject<
//       ActionItem<Fs.Appt.Books.Dtos.BookingDto>
//     >(),
//   };

//   constructor() { }

//   action<T>(type: eCmsRouteNames, data?: ActionItem<T>) {
//     this.Actions$[type].next(data);
//   }
// }
