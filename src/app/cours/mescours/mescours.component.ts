import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.css']
})
export class MescoursComponent implements OnInit {

  mescours: any;

  constructor(private service: CoursService, private router: Router) { }

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

  onClick(lirecours){
    this.router.navigate(['/cours/lirecours', lirecours]);
  }

}
