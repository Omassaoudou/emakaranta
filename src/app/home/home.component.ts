import { Component, AfterViewInit, OnInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  ngOnInit() {
    console.log('token: ' +localStorage.getItem('token') ); 
    
  }
}
