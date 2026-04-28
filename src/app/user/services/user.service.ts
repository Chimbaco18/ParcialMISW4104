import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; 
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl: string = environment.baseUrl + 'users.json';
  private reposUrl: string = environment.reposURL;


  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getRepositories(): Observable<any[]> {
    return this.http.get<any[]>(this.reposUrl);
  }
}
