import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacherDetails: any;
  constructor(private router: Router, private route: ActivatedRoute, private teacherService: TeacherService) {
    let idTeacher = this.route.snapshot.paramMap.get('id');
    this.teacherService.fetchTeacherDetails(idTeacher).subscribe(data => {
      // console.log(data);
      this.teacherDetails = data;
    })

  }

  ngOnInit() {
  }

  updateTeacher() {


    let updatedTeacher = {
      'id': this.teacherDetails.id,
      'firstName': this.teacherDetails.firstName,
      'lastName': this.teacherDetails.lastName,
      'email': this.teacherDetails.email,
    }
    this.teacherService.updateTeacherDetails(updatedTeacher).subscribe(data => {
      this.router.navigate(['dashboard/teachers-list']);
    })


  }
}
