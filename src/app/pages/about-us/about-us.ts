import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutApiService } from '../../services/api';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],   // 🔥 THIS FIXES ngIf
  templateUrl: './about-us.html'
})
export class AboutComponent {

  apiData: any;
  loading = false;
  error = '';

  constructor(private apiService: AboutApiService) {}

  checkApi() {
    console.log('Button clicked');
    this.loading = true;

    this.apiService.testApi().subscribe({
      next: (data) => {
        this.apiData = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'API Failed ❌';
        this.loading = false;
      }
    });
  }
}
