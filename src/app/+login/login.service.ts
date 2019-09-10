import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public API_URL = 'http://localhost/moodle/webservice/rest/server.php';

  constructor(private http:HttpClient) { }

  login(login: string, password: string) {
    const credentials = '?username='+login +'&password='+password +'&service=services'
    return this.http.get(this.API_URL + credentials);
  }
}
