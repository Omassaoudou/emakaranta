import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  public API_URL = 'http://localhost/moodle/webservice/rest/server.php?';

  constructor(private http:HttpClient) { }

  profil():Observable<any>{
    const token = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=id';
    const tok ='&criteria[0][value]=2';
    return this.http.get(this.API_URL + token +tok);  
  }
}
