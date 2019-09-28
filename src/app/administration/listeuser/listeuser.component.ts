import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.css']
})
export class ListeuserComponent implements OnInit {

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
