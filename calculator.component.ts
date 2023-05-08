import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  constructor(public authService: AuthService) {}
}