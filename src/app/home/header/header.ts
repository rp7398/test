import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  headerlinks = [
    { name: 'Home', url: '/home' },
    { name: 'About', url: '/about-us' },
    { name: 'Service', url: '/service' },
    { name: 'Process', url: '/process' },
    { name: 'Industries', url: '/industries' },
  ];
  isShown = signal(false);
  public links: Array<{ name: string, url: string }> = [
    { name: 'Home', url: '/home' },
    { name: 'About', url: '/about-us' },
    { name: 'Service', url: '/service' },
    { name: 'Process', url: '/process' },
    { name: 'Industries', url: '/industries' },
    { name: 'Contact', url: '/contact' },
  ];
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
}
