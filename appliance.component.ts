import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '@auth0/auth0-angular'

@Component({
  selector: 'appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.css']
})

export class ApplianceComponent { 
    appliance_list: any = [];
    rating: any = [];
    ratingForm: any;

    constructor(public webService: WebService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                public authService: AuthService) {}

    ngOnInit() {

      this.ratingForm = this.formBuilder.group({
        name: ['', Validators.required],
        review: ['', Validators.required],
        UserRatingoutof10: 10
      });

      this.appliance_list = this.webService.getAppliance(this.route.snapshot.params['id'] );
      this.rating = this.webService.getRatings(this.route.snapshot.params['id'] );
    }

    onSubmit() {
      this.webService.postRating(this.ratingForm.value)
          .subscribe( (response: any) => {
            this.ratingForm.reset();
            this.rating = this.webService.getRatings(
                               this.route.snapshot.params['id']);
        }); 
       
      this.ratingForm.reset();
    }

    isInvalid(control: any) {
      return this.ratingForm.controls[control].invalid &&
             this.ratingForm.controls[control].touched;
    }

    isUntouched() {
      return this.ratingForm.controls.name.pristine ||
             this.ratingForm.controls.review.pristine;
    }
    
    isIncomplete() {
      return this.isInvalid('name') ||
             this.isInvalid('rating') ||
             this.isUntouched();
    }
}

