import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  name: any; 

  constructor() { }

  ngOnInit() {
    this.name= new FormControl('');
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  updateName1() {
    this.name.setValue('Bob');
  }

}
