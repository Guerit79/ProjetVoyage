import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Travel } from '../../shared/models/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelListService {

  travelService: BehaviorSubject<Travel[]> = new BehaviorSubject<Travel[]>([]);


  sendTravelToDisplay(travelFromListTravel: Travel[]) {
    this.travelService.next(travelFromListTravel);
    console.log('sendTravelToDisplay :', travelFromListTravel);
  }
}
