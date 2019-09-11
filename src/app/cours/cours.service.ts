import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  public API_URL = 'http://localhost/moodle/webservice/rest/server.php?';

  constructor(private http:HttpClient) { }

  query1():Observable<any>{
    const cours = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_course_get_courses&moodlewsrestformat=json';  

    return this.http.get(this.API_URL + cours);   
  } 

  mescours():Observable<any>{
    const mescours = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=2';  
 
    return this.http.get(this.API_URL + mescours);   
  }
  
  participants():Observable<any>{
    const participants = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_enrol_get_enrolled_users%20&moodlewsrestformat=json&courseid=2';  
 
    return this.http.get(this.API_URL + participants);   
  }
}


