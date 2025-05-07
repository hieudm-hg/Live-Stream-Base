import { Component } from '@angular/core';
import { IconCustomService } from './service-custom/iconCustom.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Base-Angular';

  constructor(
    private customIconService: IconCustomService,
  ){

  }
}
