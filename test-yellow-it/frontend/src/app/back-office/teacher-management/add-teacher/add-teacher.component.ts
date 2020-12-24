import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  newTeacherForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private teacherService: TeacherService) { }

  ngOnInit() {
    this.newTeacherForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }


  submit() {
    if (this.newTeacherForm.valid) {
      let teacher = this.newTeacherForm.value
      this.teacherService.addNewTeacher(teacher).subscribe(data => {
        this.router.navigate(['dashboard/teachers-list']);
      })

    }
  }
}
