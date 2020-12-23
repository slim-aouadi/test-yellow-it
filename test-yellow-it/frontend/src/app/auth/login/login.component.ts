import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/security/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: any;
  constructor(private route: ActivatedRoute, private router: Router, private loginService: AuthService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.returnUrl = decodeURI(this.route.snapshot.queryParams['returnUrl'] || '/');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  login() {
    if (this.loginForm) {
      let User = this.loginForm.value
      this.loginService.login(User.username, User.password)
        .subscribe(
          (response: any) => {
            if (this.returnUrl) {
              this.router.navigateByUrl(this.returnUrl);
            } else {
              this.router.navigate(['/cockpit']);
            }
          },
          error => {
            console.log(error);
            alert('Please check your credentials');
          }
        );
    }
  }



}
