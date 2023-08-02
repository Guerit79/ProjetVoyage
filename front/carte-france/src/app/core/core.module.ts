import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CreateAcountComponent } from './component/create-acount/create-acount.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginLayoutComponent } from './component/login-layout/login-layout.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FavorisListComponent } from './component/favoris-list/favoris-list.component';
import { MainComponent } from './component/main/main.component';



@NgModule({
  declarations: [
    CreateAcountComponent,
    ForgotPasswordComponent,
    LoginLayoutComponent,
    NavbarComponent,
    FooterComponent,
    FavorisListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class CoreModule {

     constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

      if (parentModule) {

        throw new Error('CoreModule is already loaded.');

      }
    }
}
