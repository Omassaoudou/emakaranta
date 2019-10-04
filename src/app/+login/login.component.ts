import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  token: any;
  message: any;

  constructor(private loginService: LoginService, private router: Router) { } 

  ngOnInit() {
    this.profileForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(): void {
    this.loginService.login(this.profileForm.value.email, this.profileForm.value.password).subscribe(res=>{
      this.token = res.token;
      this.message = "Nom d'utilisateur ou mot de passe incorrect, veuillez réessayer";
      console.log(res);
      localStorage.setItem('token', this.token);
      if(this.token){
        this.message = res.error;
        this.router.navigate(['/accueil']);
      }
     
    }, err=>{
      console.error(err);
    });
  }

}
