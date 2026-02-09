import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: HttpClient) {}

  testApi() {
    return this.http.get(this.apiUrl);
  }
}
