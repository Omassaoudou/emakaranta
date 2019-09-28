import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../core.service';
@Component({
  selector: 'app-header-inner', 
  templateUrl: './header-inner.component.html' 
})
export class HeaderInnerComponent {
  users: any;
  idUser: any;

  constructor(private router: Router, private service: CoreService) { }


  ngOnInit() {
    this.getData();

   
      this.service.profil().subscribe(res=>{
        this.users = res.users[0];
        console.log(res);
      }, err=>{
        console.error(err);
      }); 
    
  }

    getData(){
    } 

  

  deconexion(){
    localStorage.clear();
    this.router.navigate(['/login']); 
  }
}
