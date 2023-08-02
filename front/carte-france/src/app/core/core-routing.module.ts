import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginLayoutComponent } from './component/login-layout/login-layout.component';
import { CreateAcountComponent } from './component/create-acount/create-acount.component';
import { FavorisListComponent } from './component/favoris-list/favoris-list.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    },

    {
      path: 'main',
      component: MainComponent
    },

    {
      path: 'create-acount',
      component: CreateAcountComponent
    },

    {
      path: 'forgot-password',
      component: ForgotPasswordComponent
    },

    {
      path: 'login',
      component: LoginLayoutComponent
    },

    {
      path: 'favori',
      component: FavorisListComponent
    },

    {
      path: 'public',
      loadChildren: () => import('../public/public.module').then(m => m.PublicModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
