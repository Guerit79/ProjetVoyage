import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({

  imports: [
     AdminLayoutRoutingModule,
     RouterModule
  ],
  declarations: [AdminLayoutComponent]
})
export class AdminLayoutModule { }
