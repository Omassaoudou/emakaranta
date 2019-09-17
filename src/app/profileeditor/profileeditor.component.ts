import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-profileeditor',
  templateUrl: './profileeditor.component.html',
  styleUrls: ['./profileeditor.component.css']
})
export class ProfileeditorComponent implements OnInit {
 name: any;
 profileForm: FormGroup;

  constructor() { }

  ngOnInit() {
    

    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
  }


















  

  onLoadDataClick(): void{
    this.profileForm.patchValue({
      firstName: 'Nice',
      lastName: 'France'
    });
  }


  updateProfile() {
    this.profileForm.patchValue({
      firstName:'Nancy',
     });
  }

  upName() {this.name.setValue('M.O.M');}
  

}
