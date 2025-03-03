import { Component } from '@angular/core';

// For faster routing (don't need to rerender nav)
import { RouterLink } from '@angular/router';

@Component({
  // Render app-nav where ever we put it
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
