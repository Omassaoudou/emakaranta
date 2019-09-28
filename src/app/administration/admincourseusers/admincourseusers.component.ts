import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admincourseusers',
  templateUrl: './admincourseusers.component.html',
  styleUrls: ['./admincourseusers.component.css']
})
export class AdmincourseusersComponent implements OnInit {
  idCour: any;
  users: any;

  constructor(private service: AdministrationService, private route: ActivatedRoute) { } 

  ngOnInit() {
    this.getData();
    this.idCour = this.route.snapshot.params['id'];

    this.service.admincourseusers(this.idCour).subscribe(res=>{
      this.users = res;
      console.log(res);
    }, err=>{
      console.error(err);  
    });
  }

    getData(){
      
    }

}
