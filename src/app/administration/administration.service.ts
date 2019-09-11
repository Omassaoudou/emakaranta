import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  public API_URL = 'http://localhost/moodle/webservice/rest/server.php?';

  constructor(private http:HttpClient) { }

  query():Observable<any>{
    const utilisateur = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=&criteria[0][value]=';

    return this.http.get(this.API_URL + utilisateur);
  }

  query1():Observable<any>{
    const cours = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_course_get_courses&moodlewsrestformat=json';  

    return this.http.get(this.API_URL + cours); 
  }
  
}
