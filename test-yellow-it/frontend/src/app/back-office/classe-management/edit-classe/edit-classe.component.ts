import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from 'src/app/services/classe/classe.service';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.css']
})
export class EditClasseComponent implements OnInit {


  autocompleteItems: any = [];
  filteredOptions: any = [];
  teachersList: any = [];
  affectedTeachers: any = [];
  selectedValue: any;
  className: string;
  fetchedClasse: any;
  constructor(private router: Router, private teacherService: TeacherService, private route: ActivatedRoute, private classeService: ClasseService) {
    this.teacherService.fetchAllTeachers().subscribe(data => {
      this.teachersList = data;
      let idClasse = this.route.snapshot.paramMap.get('id');
      this.classeService.fetchClasseDetails(idClasse).subscribe(data => {
        this.fetchedClasse = data;
        this.fetchedClasse.userClasses.forEach(element => {
          this.affectedTeachers.push(element)
        });
        this.teachersList.forEach(element => {
          let index = this.affectedTeachers.findIndex(obj => obj.username === element.username)
          if (index > -1) {
            this.teachersList.splice(index, 1);
            this.selectedValue = -1
          }
        });

      })
    })
  }

  ngOnInit() {

  }



  affectTeacherToClass() {
    this.affectedTeachers.push(this.teachersList[this.selectedValue])
    this.teachersList.splice(this.selectedValue, 1)
    this.selectedValue = -2
  }

  removeAffectedTeacher(index) {

    this.teachersList.push(this.affectedTeachers[index])
    this.affectedTeachers.splice(index, 1);
    this.selectedValue = -1
  }

  updateClasse() {

    let updatedClasse = {
      'id': this.fetchedClasse.id,
      'name': this.fetchedClasse.name,
      'teachers': this.affectedTeachers
    }
    console.log(updatedClasse)
    this.classeService.updateClasseDetails(updatedClasse).subscribe(data => {
      this.router.navigate(['dashboard/classes-list']);
    })

    //   console.log(newClass)



  }

}
