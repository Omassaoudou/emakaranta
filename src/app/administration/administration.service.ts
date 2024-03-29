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

  profil(id: number):Observable<any>{
    const token = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=id';
    const tok ='&criteria[0][value]='+id;
    console.log(tok);
    
    return this.http.get(this.API_URL + token +tok);  
  }

  admincourseusers(id: number):Observable<any>{
    const utilisateur = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_enrol_get_enrolled_users &moodlewsrestformat=json';
    const tok ='&courseid='+id
    return this.http.get(this.API_URL + utilisateur +tok); 
  }

  mescours(id: number):Observable<any>{
    const mescours = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json';  
    const tok ='&userid='+id
    return this.http.get(this.API_URL + mescours + tok);   
  }

  courses():Observable<any>{
    const cours = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_course_get_courses &moodlewsrestformat=json';   
    return this.http.get(this.API_URL + cours);
  } 

  courseS(id: number):Observable<any>{
    const cours = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_course_delete_courses&moodlewsrestformat=json';  
    const tok ='&courseid='+id 
    return this.http.get(this.API_URL + cours +tok);
  } 

  creercours( nomcomplet: string, nomabr: string, categorie: number, description: string):Observable<any>{
    const tok = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_course_create_courses&moodlewsrestformat=json'
    const credentials = '&courses[0][fullname]='+nomcomplet+'&courses[0][shortname]='+nomabr+'&courses[0][categoryid]='+categorie+'&courses[0][summary]='+description
    console.log(this.API_URL + tok +credentials);
    return this.http.post(this.API_URL + tok +credentials, null);
  }
  
  compteajout(username: string, password: string, nom: string,prenom: string, email:string, pays: string, ville: string):Observable<any>{
    const tok = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_user_create_users&moodlewsrestformat=json'
    const credentials = '&users[0][username]='+username +'&users[0][auth]=manual&users[0][password]='+password +'&users[0][lastname]='+nom +'&users[0][firstname]='+prenom +'&users[0][email]='+email +'&users[0][lang]=fr&users[0][calendartype]=gregorian&users[0][country]='+pays +'&users[0][city]='+ville 
    console.log(this.API_URL + tok +credentials);
    return this.http.post(this.API_URL + tok +credentials, null);
  }

  compteModif(userId: number, username: string, nom: string,prenom: string, email:string):Observable<any>{
    const tok = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_user_update_users&moodlewsrestformat=json'
    const credentials ='&users[0][id]='+userId +'&users[0][username]='+username +'&users[0][lastname]='+nom +'&users[0][firstname]='+prenom +'&users[0][email]='+email +'&users[0][lang]=fr' 
    console.log(this.API_URL + tok +credentials);
    return this.http.post(this.API_URL + tok +credentials, null);
  }

  role(id: number, userId: number):Observable<any>{
    const cours = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=enrol_manual_enrol_users &moodlewsrestformat=json&enrolments[0][roleid]=5';  
    const tok ='&enrolments[0][userid]='+userId +'&enrolments[0][courseid]='+id
    return this.http.post(this.API_URL + cours +tok, null);
  }
  
  roleSup(id: number, userId: number):Observable<any>{
    const cours = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=enrol_manual_unenrol_users&moodlewsrestformat=json&enrolments[0][roleid]=5';  
    const tok ='&enrolments[0][userid]='+userId+'&enrolments[0][courseid]='+id
    return this.http.post(this.API_URL + cours +tok, null);
  }
 
}
