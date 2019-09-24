import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdministrationService } from '../administration.service';

@Component({
  selector: 'app-creercours',
  templateUrl: './creercours.component.html',
  styleUrls: ['./creercours.component.css']
})
export class CreercoursComponent implements OnInit {
  creercoursForm: FormGroup;
  tok: any;

  constructor(private administrationService: AdministrationService) { }

  ngOnInit() {

    this.creercoursForm = new FormGroup({
      nomcomplet: new FormControl(''),
      nomabr: new FormControl(''),
      categorie: new FormControl(''),
      description: new FormControl(''),
      // datedeb: new FormControl(''),
      // datefin: new FormControl(''),
    });
  }
 
  onSubmit(): void {
    this.administrationService.creercours(this.creercoursForm.value.nomcomplet, this.creercoursForm.value.nomabr, this.creercoursForm.value.categorie, this.creercoursForm.value.description).subscribe(res=>{
      this.tok = res;
      console.log(res);
    }, err=>{
      console.error(err);
    });
  }

}
