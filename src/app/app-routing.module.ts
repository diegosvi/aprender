import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'oauth',
    pathMatch: 'full'
  },
  {
    path: 'oauth',
    loadChildren: () => import('./pages/oauth/oauth.module').then( m => m.OauthPageModule), canActivate:[NoAuthGuard]
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule), canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],


  exports: [RouterModule]
})
export class AppRoutingModule { }
