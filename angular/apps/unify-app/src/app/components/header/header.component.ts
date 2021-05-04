import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApplicationConfigurationDto,ApplicationConfigurationService,
  ConfigStateService, Profile
} from '@abp/ng.core';
import { AuthService } from '@abp/ng.core'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser$ = this.configStateService.getOne$('currentUser');
  constructor(
    private authService: AuthService,
    private router: Router,
    private configStateService: ConfigStateService,
  ) { }

  ngOnInit(): void {
  }

  removeShow(){
    document.getElementById('navBar').classList.remove("show");
    document.getElementById('modalIcon').classList.remove("is-active");
  }


  logout() {
    this.authService.logout().subscribe(()=>{
      this.router.navigateByUrl('/member/login');        
    }) 
  }
}
