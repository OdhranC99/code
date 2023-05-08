import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})

export class PopularComponent {
  appliance_list: any;
  page : number = 1;
  constructor(public webService: WebService) {}

  ngOnInit() {
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page'])
    }
    this.appliance_list = this.webService.getAppliances(this.page = 1);
}

previousPage() { if (this.page > 1) {
  this.page = this.page - 1;
  sessionStorage['page'] = this.page;
  this.appliance_list = this.webService.getAppliances(this.page);
  }
}

nextPage() { this.page = this.page + 1;
  sessionStorage['page'] = this.page;
  this.appliance_list = this.webService.getAppliances(this.page);
} 

  
}
