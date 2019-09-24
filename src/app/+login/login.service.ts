import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class LoginService {

  public API_URL = 'http://localhost/moodle/login/token.php';

  constructor(private http:HttpClient) { }

  login(login: string, password: string):Observable<any>{
    const credentials = '?username='+login +'&password='+password + '&service=services'
    return this.http.post(this.API_URL + credentials, null);
  }
}
