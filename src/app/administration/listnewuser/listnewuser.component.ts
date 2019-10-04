import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';

@Component({
  selector: 'app-listnewuser',
  templateUrl: './listnewuser.component.html',
  styleUrls: ['./listnewuser.component.css']
})
export class ListnewuserComponent implements OnInit {
  users: any;

  constructor(private service: AdministrationService) { } 

  ngOnInit() {
    this.getData();
  }

    getData(){
      this.service.query().subscribe(res=>{
        this.users = res.users;
        console.log(res);
      }, err=>{
        console.error(err);
      }); 
    }

}
