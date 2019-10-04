import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  profil: any;
  cours: any;
  mescours: any;
  userId: number;
  nameCour: number;
  profileForm: FormGroup;
  tok:any;

  constructor(private service: AdministrationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { 
    this.userId = this.route.snapshot.params['id'];
    this.getData();
  }
    
    getData(){
      this.service.profil(this.userId).subscribe(res=>{ 
        this.profil = res; 
      }, err=>{
        console.error(err);  
      })

      this.service.courses().subscribe(res=>{
        this.cours = res;
      }, err=>{
        console.error(err);
      })

      this.service.mescours(this.userId).subscribe(res=>{  
        this.mescours = res; 
      }, err=>{
        console.error(err); 
      })

      this.profileForm = new FormGroup({
        idCour: new FormControl(''),
        username: new FormControl(''),
        nom: new FormControl(''),
        prenom: new FormControl(''),
        email: new FormControl('')
      });

    }


    onClick(idCour, userId): void {
      this.service.role( idCour, userId).subscribe(res=>{    
        this.mescours = res; 
      }, err=>{
        console.error(err); 
      });
    } 

    onClickSup(idCour, userId): void {
      this.service.roleSup( idCour, userId).subscribe(res=>{    
        this.mescours = res;
      }, err=>{
        console.error(err); 
      });
    } 

    onSubmit(userId): void {
      this.service.compteModif(userId, this.profileForm.value.username, this.profileForm.value.nom, this.profileForm.value.prenom, this.profileForm.value.email).subscribe(res=>{
        this.tok = res.username;
      }, err=>{
        console.error(err);  
      });
    } 

  }

