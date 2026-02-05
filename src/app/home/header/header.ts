import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Needed for routerLink

@Component({
  selector: 'app-header', 
  standalone: true,               // Make it standalone
  imports: [
    RouterLink,
    RouterLinkActive
  ],        // Import RouterModule for routerLink
  templateUrl: './header.html',   // Your header HTML file
  styleUrls: ['./header.css'],    // Corrected from styleUrl → styleUrls
})
export class Header {}
