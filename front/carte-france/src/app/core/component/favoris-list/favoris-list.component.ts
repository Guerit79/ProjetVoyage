import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthWebService } from '../../web-service/auth.webservices';

@Component({
  selector: 'app-favoris-list',
  templateUrl: './favoris-list.component.html',
  styleUrls: ['./favoris-list.component.css']
})
export class FavorisListComponent {
  favoris: any[] = []

  constructor(private authWebService: AuthWebService, private http: HttpClient, ) { }

  ngOnInit() {
    this.loadFavoris();
    console.log("OnInit => ", this.favoris);
  }

  loadFavoris(): void {
    const userId = this.authWebService.userId; // Récupération de l'ID de l'utilisateur depuis le service web
    console.log("loadFavoris => ", this.favoris);
    if (userId !== null) {
      this.authWebService.getFavoris(userId).subscribe(
        favoris => {
          this.favoris = favoris; // Stockage des favoris dans la variable du composant
        },
        error => {
          console.log('Une erreur est survenue lors du chargement des favoris :', error);
        }
      );
    }
  }

}
