import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

    _list: any;
    private applianceID: any;

    constructor(private http: HttpClient) {}

    getAppliances(page : number) {
        return this.http.get('http://localhost:5000/api/v1.0/appliances?pn=' + page);
    }

    getAppliance(id : any) {
        this.applianceID = id;
        return this.http.get(
           'http://localhost:5000/api/v1.0/appliances/' + id);
    }
    
    getRatings(id : any) {
        return this.http.get(
               'http://localhost:5000/api/v1.0/appliances/' + id + '/rating');
    }
    
    postRating(rating: any) {
        let postData = new FormData();
        postData.append("User", rating.User);
        postData.append("Rating", rating.Rating);

        return this.http.post('http://localhost:5000/api/v1.0/appliances/' + 
                                this.applianceID + '/rating', postData);
    }
}


  
   
