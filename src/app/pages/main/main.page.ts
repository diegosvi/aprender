import { Component, inject, OnInit } from '@angular/core';
//import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
//import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService)

  pages =[
    {title:'Inicio', url:'/main/home', icon:'home-outline'},
    {title:'Perfil', url:'/main/profile', icon:'person-outline'}
  ]

router = inject(Router);
currentPath: string='';

  ngOnInit() {

    this.router.events.subscribe((event:any)=>{
      if(event?.url) this.currentPath = event.url;
    })
  }


  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  signOut() {
    this.firebaseSvc.signOut();
  }

}
