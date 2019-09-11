import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  participants: any;

  constructor(private service: CoursService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.participants().subscribe(res=>{
      this.participants = res; 
      console.log(res);
    }, err=>{
      console.error(err);
    });
  }

}
