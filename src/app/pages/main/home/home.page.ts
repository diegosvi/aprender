import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService)

  pages =[
    {title:'Abecedario', url:'abecedario', icon:'home-outline'},
    {title:'Perfil', url:'profile', icon:'person-outline'}
  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

user(): User {
  return this.utilsSvc.getFromLocalStorage('user');
}


  signOut() {
    this.firebaseSvc.signOut();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  irAbecedario() {
    this.navCtrl.navigateForward('/abecedario'); // Asegúrate de que la ruta esté correctamente configurada
  }

  irNumeros() {
    this.navCtrl.navigateForward('/numeros'); // Asegúrate de que la ruta esté correctamente configurada
  }

  irColores() {
    this.navCtrl.navigateForward('/colores'); // Asegúrate de que la ruta esté correctamente configurada
  }

  irFiguras() {
    this.navCtrl.navigateForward('/figuras'); // Asegúrate de que la ruta esté correctamente configurada
  }

  dismiss() {
    this.navCtrl.pop();
  }

}
