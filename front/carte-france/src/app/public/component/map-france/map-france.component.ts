import { Component, ElementRef, OnInit } from '@angular/core';
import { TravelListService } from 'src/app/core/services/travel-list.service';
import { TravelWebService } from 'src/app/core/web-service/travel.webservice';
import { Travel } from 'src/app/shared/models/travel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carte-france',
  templateUrl: './map-france.component.svg',
  styleUrls: ['./map-france.component.css']
})
export class MapFranceComponent implements OnInit {

  id: any;
  travelListByRegion: Travel[]=[]

  constructor(private router: Router, private elementRef: ElementRef, private travelWebService: TravelWebService, private travelListeService: TravelListService) { }

  ngOnInit(){ };

  onClick(event: any){
    this.id = event.target.getAttribute('id');

    this.travelWebService.findTravelByIdRegion(this.id).subscribe((data) => {
      this.travelListeService.sendTravelToDisplay(data);
    });

    this.router.navigate(['public/details']);

  }

}

