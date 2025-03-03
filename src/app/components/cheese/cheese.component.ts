import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

export class Cheese {
  _id: string | undefined;
  name: string | undefined;
}

@Component({
  selector: 'app-cheese',
  imports: [NgFor],
  templateUrl: './cheese.component.html'
})
export class CheeseComponent {
  // Creating an array with mock data
  CHEESES: Cheese[] = [
    { _id: "abc", name: "Cheddar" },
    { _id: "abcd", name: "Swiss" },
    { _id: "abcdef", name: "Gouda" }
  ];



}
