import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class ConsumptionComponent {

  constructor(public authService: AuthService) {}
}