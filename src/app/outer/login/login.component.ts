import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLoader:boolean=false;
  submitted:boolean=false;
  show:boolean=false;
  loginForm!: FormGroup;
  constructor(private _fb: FormBuilder,private _snackBar: MatSnackBar,
    private _router: Router,) {

   }

  ngOnInit(): void {

    // login Form Group With required fields and required Validators
    this.loginForm = this._fb.group({
      phone_number: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  // To Get Login Form Controls 
  get f() {
    return this.loginForm.controls;
  }
// Toggle function for password visibility
  password() {
    this.show = !this.show;
  }

// Login Submit Button Function
  btn_onClickLogin(){
    if (this.loginForm.invalid) {
      this.submitted = true;
    } else {
      this.showLoader=true;

    }
  }
}
