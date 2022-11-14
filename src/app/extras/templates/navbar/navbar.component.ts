import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sesionActiva : Boolean=false;  //NavBar se oculte y aparezca cuando el cliente se autentique
  
  constructor() { }

  ngOnInit(): void {
  }

}
