import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm: FormGroup;
  tok: any;

  constructor(private registerService: RegisterService ) { }

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
    this.registerService.register(this.profileForm.value.username, this.profileForm.value.password, this.profileForm.value.nom, this.profileForm.value.prenom, this.profileForm.value.email, this.profileForm.value.pays, this.profileForm.value.ville).subscribe(res=>{
      this.tok = res.username;
      console.log(res);
    }, err=>{
      console.error(err);
    });
  } 

}
