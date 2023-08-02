import { Component } from '@angular/core';
import { AuthWebService } from '../../web-service/auth.webservices';
import { Router, RouterLink } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent {
  pseudo: string;
  mdp: string;

  constructor(private authWebService: AuthWebService, private router: Router) { }

  onSubmit(): void {
    console.log("ca submit ici ?");
    console.log(this.pseudo, this.mdp);


    this.authWebService.login(this.pseudo, this.mdp).subscribe(
      response => {
        this.router.navigateByUrl('../../../public/component/map-france/map-france.component.svg');
      },
      error => {
        if (error.status === 401) {
          console.log("Erreur de connexion : identifiants incorrects");
          // Gérer l'affichage du message d'erreur à l'utilisateur
        } else {
          console.log("Erreur lors de la connexion : ", error);
          // Gérer d'autres erreurs éventuelles
        }
      }
    );
  }

}
