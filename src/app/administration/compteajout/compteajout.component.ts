import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdministrationService } from '../administration.service';

@Component({
  selector: 'app-compteajout',
  templateUrl: './compteajout.component.html',
  styleUrls: ['./compteajout.component.css']
})
export class CompteajoutComponent implements OnInit {
  profileForm: FormGroup;
  tok: any;

  constructor(private administrationService: AdministrationService ) { }

  ngOnInit() { 
    this.profileForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      email: new FormControl(''),
      pays: new FormControl(''),
      ville: new FormControl('')
    });
  }

  onSubmit(): void {
    this.administrationService.compteajout(this.profileForm.value.username, this.profileForm.value.password, this.profileForm.value.nom, this.profileForm.value.prenom, this.profileForm.value.email, this.profileForm.value.pays, this.profileForm.value.ville).subscribe(res=>{
      this.tok = res.username;
      console.log(res);
    }, err=>{
      console.error(err);  
    });
  } 
}
