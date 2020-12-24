import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/security/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  connectedUser: any;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(StorageService.getUser())
    this.connectedUser = StorageService.getUser()
    console.log(this.connectedUser)
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
  redirectToDashboard() {
    window.location.href = "/dashboard";
  }

}
