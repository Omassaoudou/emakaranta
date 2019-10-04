import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.css']
})
export class ListeuserComponent implements OnInit {

  users: any;

  constructor(private service: AdministrationService, private router: Router) { } 

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
    onClick(userId){
      this.router.navigate(['/administration/option', userId]);
    }

}
