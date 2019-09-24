import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creercat',
  templateUrl: './creercat.component.html',
  styleUrls: ['./creercat.component.css']
})
export class CreercatComponent implements OnInit {
  name = new FormControl('');
  creerForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.creerForm = new FormGroup({
      nomutil: new FormControl(''),
      nomuti: new FormControl(''),
      prenomuti: new FormControl(''),
     emailuti : new FormControl(''),
      payuti: new FormControl(''),
      villeuti: new FormControl(''),
    });
  }

  onSubmit(): void {
    console.log(this.creerForm.value);
  }
}
