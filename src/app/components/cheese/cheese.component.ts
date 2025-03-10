import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { FormsModule } from '@angular/forms';

// Get the cheese service
import { CheeseService } from '../../services/cheese.service';

// export class Cheese {
//   _id: string | undefined;
//   name: string | undefined;
// }

export class Cheese {
  _id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  stinkRating: number | undefined;
  category: string | undefined;
}

@Component({
  selector: 'app-cheese',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './cheese.component.html'
})
export class CheeseComponent implements OnInit {

  // Cheeses: type any
  CHEESES: any;
  _id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  stinkRating: number | undefined;
  category: string | undefined;

    // Adding a constructor for dependency injection
    constructor(private service: CheeseService) {}

    // This method calls the service whitch calls the api. The method waits for it
    getCheeses (): void {
      this.service.getCheeses().subscribe(response => {
        this.CHEESES = response;
      })
    }

    addCheese (): void {
      let newCheese = {
        name: this.name,
        price: this.price,
        stinkRating: this.stinkRating,
        category: this.category
      }

      this.service.addCheese(newCheese).subscribe(response => {
        this.getCheeses();
        this.resetForm();
      })
    }

    resetForm (): void {
      // With NG data binding the form front end is updated right away
      this._id = undefined;
      this.name = undefined;
      this.price = undefined;
      this.stinkRating = undefined;
      this.category = undefined;
    }
  
    // As soon as the service gets calles, get the cheeses
    ngOnInit () {
      this.getCheeses();
    }


  selectCheese(cheese: Cheese) {
    this._id = cheese._id;
    this.name = cheese.name;
    this.price = cheese.price;
    this.stinkRating = cheese.stinkRating;
    this.category = cheese.category;
  }

    deleteCheese(_id: string) : void
    {
      if (confirm('Are you sure you want to delete this cheese?')) 
      {
        this.service.deleteCheese(_id).subscribe(response => {
          this.getCheeses();
          this.resetForm();
      });
    }
  }

  updateCheese() : void {
    let cheese = {
      _id: this._id,
      name: this.name,
      price: this.price,
      stinkRating: this.stinkRating,
      category: this.category
    }
    this.service.updateCheese(cheese).subscribe(response => {
      this.getCheeses();
      this.resetForm();
    })
  }





  // // Creating an array with mock data
  // CHEESES: Cheese[] = [
  //   { _id: "abc", name: "Cheddar" },
  //   { _id: "abcd", name: "Swiss" },
  //   { _id: "abcdef", name: "Gouda" }
  // ];

}
