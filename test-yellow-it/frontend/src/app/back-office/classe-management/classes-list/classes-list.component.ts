import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/services/classe/classe.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {


  classesList = [];
  constructor(private router: Router, private classeService: ClasseService) {

    this.classeService.fetchAllClasses().subscribe(data => {
      this.classesList = data;
      //console.log(data);
    })
  }

  editClasse(classe) {
    this.router.navigate(['dashboard/edit-classe/' + classe.id]);
  }

  removeClasse(id) {
    this.classeService.removeClasse(id).subscribe(data => {
      let index = this.classesList.findIndex(obj => obj.id === id)
      this.classesList.splice(index, 1);
      console.log(data);
    })
  }
  ngOnInit() {
  }

}
