import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lirecours',
  templateUrl: './lirecours.component.html',
  styleUrls: ['./lirecours.component.css']
})
export class LirecoursComponent implements OnInit {

  lirecours: any;
  cours: any;
  idCour: number;
  nameCour: number;

  constructor(private service: CoursService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
    this.idCour = this.route.snapshot.params['id'];

    this.service.lirecours(this.idCour).subscribe(res=>{
      this.lirecours = res; 
      console.log(res); 
    }, err=>{
      console.error(err); 
    });

    this.service.cours().subscribe(res=>{  
      this.cours = res; 
    }, err=>{
      console.error(err); 
    });
  }

  getData(){
    
  }

}
