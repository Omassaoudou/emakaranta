import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-creercours',
  templateUrl: './creercours.component.html',
  styleUrls: ['./creercours.component.css']
})
export class CreercoursComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
