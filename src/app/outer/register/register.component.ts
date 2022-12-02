import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showLoader:boolean=false;
  submitted:boolean=false;
  showP:boolean=false;
  showCP:boolean=false;
  signupForm!:FormGroup;
  selectedbtn:any ;
  companySelected:boolean=true;
  ISOSelected:boolean=false;
  constructor(private _fb: FormBuilder,
    private _router:Router
    ) { }

  ngOnInit(): void {
    this.signupForm = this._fb.group({
      user_name: ['', Validators.required],
      email: ['',[ Validators.required,Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')]],
      // password: ['', Validators.required],
      // confirm_password:['',Validators.required],
      phone_number: ['', [Validators.required,Validators.pattern('^([0-9]{10})+$')]],
    });
  }

  get f() {
    return this.signupForm.controls;
  }
  visiblepassword(){
this.showP= !this.showP;
  }

  visibleConfirmPassword(){
   this.showCP=!this.showCP ;
  }


  btn_onClickSignUp(){
    if (this.signupForm.invalid) {
     this.submitted=true
    }else{
      this.showLoader=true
    }
  }
  
  showSelectedcomp() {
    this.companySelected=true;
    this.ISOSelected=false;
  }
  showSelectedIso(){
    this.companySelected=false;
    this.ISOSelected=true; 
  }
}
