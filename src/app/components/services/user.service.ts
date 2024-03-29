import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserFromPlaceholder(): Observable<any[]> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
      .pipe(
        map((response: any[]) => {
          return response;
        })
      );
  }
}
