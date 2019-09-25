import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  cours: any;

  constructor(private service: AdministrationService) { }

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
}
