import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/services/classe/classe.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {

  constructor(private classeService: ClasseService) {

    this.classeService.fetchAllClasses().subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
