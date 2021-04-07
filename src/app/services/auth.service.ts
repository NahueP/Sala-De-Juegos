import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Usuario } from './../clases/usuario';


@Injectable()
export class AuthService {

  

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  async login(usuario:Usuario,password:string)
  {
    try
    {
      const result = await this.afAuth.signInWithEmailAndPassword(usuario.correo,password);
      return result;
      
    }
    catch(error)
    {
      console.log(error);
      alert(error);
    }
  }

  async register(usuario:Usuario, password:string)
  {
    try
    {
      const result = await this.afAuth.createUserWithEmailAndPassword(usuario.correo,password);
      return result;
    }
    catch(error)
    {
      console.log(error);
      alert(error);
    }
  }

  async logout()
  {
    try
    {
      await this.afAuth.signOut();
    }
    catch(error)
    {
      console.log(error);
      alert(error);
    }
  }

  getCurrentUser()
  {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  
}
