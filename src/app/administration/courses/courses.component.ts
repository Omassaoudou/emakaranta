import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  cours: any;

  constructor(private service: AdministrationService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.courses().subscribe(res=>{
      this.cours = res; 
      console.log(res);
    }, err=>{
      console.error(err);
    });
  }

  onClick(idCour){
    this.router.navigate(['/administration/admincourseusers', idCour]);
  }
}
