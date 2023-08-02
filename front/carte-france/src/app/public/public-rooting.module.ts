import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapFranceComponent } from './component/map-france/map-france.component';
import { ListDetailsTravelsComponent } from './component/list-details-travels/list-details-travels.component';

const routes: Routes = [

  {
    path: '',
    component: MapFranceComponent,

    children: [
      {
        path: 'details',
        component: ListDetailsTravelsComponent,
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRootingModule { }
