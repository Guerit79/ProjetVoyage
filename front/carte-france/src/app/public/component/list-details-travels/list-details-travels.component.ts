import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Travel } from 'src/app/shared/models/travel';
import { TravelListService } from 'src/app/core/services/travel-list.service';
import { TravelWebService } from 'src/app/core/web-service/travel.webservice';
/*import { PostService } from './post.service';
import { HttpClient } from '@angular/common/http';*/


@Component({
  selector: 'app-list-details-travels',
  templateUrl: './list-details-travels.component.html',
  styleUrls: ['./list-details-travels.component.css']
})
export class ListDetailsTravelsComponent implements OnInit{


  objets: any[];
  postId: number;
  compteurLike: number = 0;

  isChecked: boolean;

  displayTravelSusbscription!: Subscription;
  travelList: Travel[]=[];

  constructor(private displayTravelService: TravelListService, private travelWebService: TravelWebService) {

  }
  ngOnInit(): void {
    this.getTravel();
    this.getLikeCount();
  }


private getTravel() {    // méthode observable pour récupérer les Voyages
  this.displayTravelSusbscription = this.displayTravelService.travelService.subscribe( (data) => {
    this.travelList = data;
    console.log('List Detail: ', this.travelList);
  }
);
}

getLikeCount() {
  this.travelWebService.getLikes().subscribe(data => {
    this.compteurLike = data;
  });
}

updateCounter() {
  if (this.isChecked) {
    this.compteurLike++;
  } else {
    this.compteurLike--;
  }
  this.travelWebService.updateLikes(this.compteurLike).subscribe();
}
}
