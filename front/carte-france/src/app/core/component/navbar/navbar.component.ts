import { Component } from '@angular/core';
import { AuthWebService } from '../../web-service/auth.webservices';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  burgerLogo= 'assets/images/burger-logo.png'
  menuBurger: any;
  navLinks: any;
  isAdmin: boolean;
  isUser: boolean;


  constructor(private authWebService: AuthWebService) {
    this.authWebService.user$.subscribe(user => {
      this.isAdmin = this.authWebService.isAdmin();
      this.isUser = this.authWebService.isUser();
    });
  }

  logout(): void {
    this.authWebService.logout();
  }



  ngOnInit() {
    this.menuBurger = document.querySelector(".burger-menu")
    this.navLinks = document.querySelector(".nav-links")

    console.log("chargement navbar");
    console.log();

    //this.menuBurger.addEventListener('click',()=>{
    //this.navLinks.classList.toggle('mobile-menu')
    }
  }

