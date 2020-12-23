import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  listTeachers: any = [];
  constructor(private teacherService: TeacherService) {
    this.teacherService.fetchAllTeachers().subscribe(data => {
      console.log(data)
      this.listTeachers = data;
    })
  }

  ngOnInit() {

  }

}
