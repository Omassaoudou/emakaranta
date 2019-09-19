import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public API_URL = 'http://localhost/moodle/webservice/rest/server.php?';

  constructor(private http:HttpClient) { }

  register(username: string, password: string, nom: string,prenom: string, email:string, pays: string, ville: string):Observable<any>{
    const tok = 'wstoken=c9f81d1c77bd8a585284cde023753870&wsfunction=core_user_create_users&moodlewsrestformat=json'
    const credentials = '&users[0][username]='+username +'&users[0][auth]=manual&users[0][password]='+password +'&users[0][lastname]='+nom +'&users[0][firstname]='+prenom +'&users[0][email]='+email +'&users[0][lang]=fr&users[0][calendartype]=gregorian&users[0][country]='+pays +'&users[0][city]='+ville 
    console.log(this.API_URL + tok +credentials);
    return this.http.post(this.API_URL + tok +credentials, null);
  }
}

