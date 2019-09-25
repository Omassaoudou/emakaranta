import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-lirecours',
  templateUrl: './lirecours.component.html',
  styleUrls: ['./lirecours.component.css']
})
export class LirecoursComponent implements OnInit {

  lirecours: any;

  constructor(private service: CoursService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.lirecours().subscribe(res=>{
      this.lirecours = res; 
      console.log(res);
    }, err=>{
      console.error(err);
    });
  }

}
