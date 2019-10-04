import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../administration.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  cours: any;
  idCour:any;

  constructor(private service: AdministrationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
    this.idCour = this.route.snapshot.params['id'];
  }

  getData(){
    this.service.courses().subscribe(res=>{
      this.cours = res; 
      console.log(res);
    }, err=>{
      console.error(err);
    });
  }

  onClick(idCour){
    this.router.navigate(['/administration/admincourseusers', idCour]);
  }
  
  onClickS(idCour){
    this.service.courseS(idCour).subscribe(res=>{
      this.cours = res; 
      console.log(res);
    }, err=>{
      console.error(err);
    });
  }

  t(idCour){
    this.router.navigate(['http://localhost/moodle/webservice/rest/server.php?&courseids[0]={{cour.id}}', idCour]);
  }
}
