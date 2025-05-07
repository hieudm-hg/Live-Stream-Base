import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../auth/authorize.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  isAuthenticated: boolean;
  authData: any = null;
  logoImage = '/assets/images/Logo.png';
  searchText: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _authorize: AuthorizeService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.checkAuthenticated();
  }

  handleOnSearch(value){

  }

  handleOnClear(){

  }

  checkAuthenticated(){
    this._authorize.isAuthenticated().subscribe(authen => {
      if (!authen) {
        this.router.navigate(['/page/manage-role']);
        return;
      }
      if (authen && !this.isAuthenticated) {
        this.handleAuthCurrent();
      }
    });
  }

  handleAuthCurrent() {
    this.authService.getCurrentUser().subscribe(
      async (res: any) => {
        this.authData = res?.item;
        this.isAuthenticated = false;
        this.router.navigate(['/page/manage-role']);
        // Lấy toàn bộ id Phòng ban
        // const departmentIds = res?.item?.departments?.map(dept => dept.id) || [];
        // localStorage.setItem("departmentUser", JSON.stringify(departmentIds));
        // if (this.router.url.includes('/admin/manage/')) {
        //   this.redirectBasedOnPermissions();
        // }
      },
      async (error) => {
        await this.router.navigate(['not-authorized']);
      }
    );
  }

}
