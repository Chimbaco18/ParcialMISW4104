import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.model'; 
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class RepositoryService {
  private reposUrl: string = environment.reposURL;

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.reposUrl);
  }
}