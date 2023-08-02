import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDetailsTravelsComponent } from './component/list-details-travels/list-details-travels.component';
import { MapFranceComponent } from './component/map-france/map-france.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRootingModule } from './public-rooting.module';



@NgModule({
  declarations: [
    ListDetailsTravelsComponent,
    MapFranceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    PublicRootingModule
  ]
})
export class PublicModule {



}
