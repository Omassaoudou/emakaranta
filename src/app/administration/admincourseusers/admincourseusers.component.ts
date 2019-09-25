import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';

@Component({
  selector: 'app-admincourseusers',
  templateUrl: './admincourseusers.component.html',
  styleUrls: ['./admincourseusers.component.css']
})
export class AdmincourseusersComponent implements OnInit {
  
  users: any;

  constructor(private service: AdministrationService) { } 
  ngOnInit() {
    this.getData();
  }

    getData(){
      this.service.admincourseusers().subscribe(res=>{
        this.users = res;
        console.log(res);
      }, err=>{
        console.error(err);
      });
    }

}
