import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
  }


  logout(){
    localStorage.clear();
    this.router.navigate(['/outer/login']);

  }
}
