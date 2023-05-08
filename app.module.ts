import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PopularComponent } from './popular.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ApplianceComponent } from './appliance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule} from '@auth0/auth0-angular';
import {NavComponent} from './nav.component';
import {ConsumptionComponent} from './consumption.component'
import {CalculatorComponent} from './calculator.component'




var routes: any = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'popular',
  component: PopularComponent
  },
  {
  path: 'consumption',
  component: ConsumptionComponent
  },
  {
  path: 'calculator',
  component: CalculatorComponent
  },

 

  {
    path: 'popular/:id',
    component: ApplianceComponent
    },
    {
      path: 'popular/:id',
      component: ApplianceComponent
      }
];

@NgModule({
  declarations: [
  AppComponent, NavComponent, ApplianceComponent, PopularComponent, HomeComponent, ConsumptionComponent, CalculatorComponent,
    ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(routes), ReactiveFormsModule, 
    AuthModule.forRoot( {
      domain: 'dev-r48zro35ggvvlfp7.us.auth0.com',
      clientId: 'hiY3gJsjR4yNL9bvwkuz9xloCU6nenQd'

    })
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
