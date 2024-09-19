import { inject, Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail} from 'firebase/auth'
import { User } from '../models/user.model';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { getFirestore,setDoc,doc, getDoc, updateDoc} from '@angular/fire/firestore';
import { distinctUntilKeyChanged } from 'rxjs';
import { UtilsService } from './utils.service';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL} from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSvc = inject(UtilsService);
  
  //========================Autenticación================
  getAuth(){
    return getAuth();
  }


//===========Acceder==============
signIn(user: User){
return signInWithEmailAndPassword(getAuth(), user.email, user.password)
}

//===========Crear==============
signUp(user: User){
  return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //===========Actualizar Usuario==============
updateUser(displayName: string){
  return updateProfile(getAuth().currentUser, {displayName})
}

//===========Enviar email para restablecer contraseña==============
sendRecoveryEmail(email: string){
  return sendPasswordResetEmail(getAuth(), email);
}


//============Cerrar Sesion

signOut(){
  getAuth().signOut();
  localStorage.removeItem('user');
  this.utilsSvc.routerLink('/auth')
}

// =============Base de datos==========

//=======setear un documento

setDocument(path: string, data:any){
  return setDoc(doc(getFirestore(),path), data);
  }

//=============Actualziar un documento
updateDocument(path: string, data: any){
  return updateDoc(doc(getFirestore(),path), data);
  }

// =============obtener un documento==========

async getDocument(path: string){
  return (await getDoc(doc(getFirestore(),path))).data();
  }


  async uploadImage( path: string, data_url: string){

    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(()=>{

      return getDownloadURL(ref(getStorage(), path))
    })
  }
}


