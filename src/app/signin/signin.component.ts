import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(name,pass)
  {
    console.log('user=', name);
    console.log('pass=', pass);
  }

  eventCheck(value)
  {
    console.log(value);
  }

}
