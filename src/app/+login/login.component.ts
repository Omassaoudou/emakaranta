import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  token: any;

  constructor(private loginService: LoginService) { } 

  ngOnInit() {
    this.profileForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(): void {
    this.loginService.login(this.profileForm.value.email, this.profileForm.value.password).subscribe(res=>{
      this.token = res.token;
      // return;
      console.log(res);
    }, err=>{
      console.error(err);
    });
  }

}
