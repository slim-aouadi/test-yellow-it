import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClasseService } from 'src/app/services/classe/classe.service';
import { TeacherService } from 'src/app/services/teacher/teacher.service';
import { AffectTeacherComponent } from './affect-teacher/affect-teacher.component';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  autocompleteItems: any = [];
  filteredOptions: any = [];
  teachersList: any = [];
  affectedTeachers: any = [];
  selectedValue: any;
  className: string;
  constructor(private classService: ClasseService, private teacherService: TeacherService, private dialog: MatDialog) {
    this.teacherService.fetchAllTeachers().subscribe(data => {
      this.teachersList = data;
    })

  }

  ngOnInit() {
  }



  affectTeacherToClass() {
    this.affectedTeachers.push(this.teachersList[this.selectedValue])
    this.teachersList.splice(this.selectedValue, 1)
    this.selectedValue = -1
  }

  createClass() {

    let newClass = {
      'name': this.className,
      'teachers': this.affectedTeachers
    }

    console.log(newClass)
    this.classService.addNewClasse(newClass).subscribe(data => {
      console.log(data)
    })


  }

}

