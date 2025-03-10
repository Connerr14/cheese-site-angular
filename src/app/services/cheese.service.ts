import { Injectable } from '@angular/core';
// Angular native api calling 
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


// Means we can use it for dependency injection
@Injectable({
  providedIn: 'root'
})
export class CheeseService {

  serverUrl: string = environment.serverUrl;

  // Injecting HttpClient dependency at construct time for api calls
  constructor(private http: HttpClient) { }

  // Creating a method to get all cheeses from the backend api
  getCheeses () {
    // Make the api call
    return this.http.get(`${this.serverUrl}/cheeses`);
  }

  // Sending a cheese object to the api
  addCheese (cheese: any) {
    return this.http.post(`${this.serverUrl}/cheeses`, cheese);
  }

  // Delete a cheese
  deleteCheese(_id: string) {
    return this.http.delete(`${this.serverUrl}/cheeses/${_id}`);
  }

  updateCheese(cheese: any) {
    return this.http.put(`${this.serverUrl}/cheeses/${cheese._id}`, cheese);
  }
}
