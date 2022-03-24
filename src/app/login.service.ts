import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError,of } from 'rxjs';
import { catchError, retry, tap ,map} from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName: string = "";
  password: string = "";

  private loginUrl: string = 'http://localhost:8080/project-1/login';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };



  constructor(private http: HttpClient) { }

  login(form: any): Observable<User>{
    this.userName = form.userName;
    this.password = form.password;

    return this.http.post<User>(this.loginUrl,{userName:this.userName,password:this.password},this.httpOptions);
  }
}
