import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'lib-file',
  template: ` <p>file works!</p> `,
  styles: [],
})
export class FileComponent implements OnInit {
  constructor(private service: FileService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
