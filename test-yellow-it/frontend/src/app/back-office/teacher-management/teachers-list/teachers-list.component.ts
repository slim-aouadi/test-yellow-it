import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  listTeachers: any = [];
  constructor(private router: Router, private teacherService: TeacherService) {
    this.teacherService.fetchAllTeachers().subscribe(data => {
      this.listTeachers = data;
    })
  }

  ngOnInit() {

  }

  removeTeacher(id) {
    this.teacherService.removeTeacher(id).subscribe(data => {
      let index = this.listTeachers.findIndex(obj => obj.id === id)
      this.listTeachers.splice(index, 1);
    })
  }

  editTeacher(id) {
    this.router.navigate(['dashboard/edit-teacher/' + id]);
  }

}
