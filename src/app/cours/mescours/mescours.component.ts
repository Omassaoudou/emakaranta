import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.css']
})
export class MescoursComponent implements OnInit {

  mescours: any;

  constructor(private service: CoursService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.mescours().subscribe(res=>{
      this.mescours = res; 
      console.log(res);
    }, err=>{
      console.error(err);
    });
  }

}
