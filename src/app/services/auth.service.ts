import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from './../clases/usuario';
import Swal from 'sweetalert2';


@Injectable()
export class AuthService {

  
  private user: Observable<firebase.default.User>;

  constructor(public afAuth: AngularFireAuth,private authSvc: AngularFireDatabase ,private router: Router) 
  {
    this.user = afAuth.authState;
  }

  authUser() {
    return this.user;
  }

  getCurrentUser(){
    return this.afAuth.authState;
  }

 

  async login(usuario:Usuario)
  {
   try
   { 
      return await this.afAuth.signInWithEmailAndPassword(usuario.correo,usuario.clave)
   }
   catch(error)
   {
     return error;
   }  
  }

  async register(usuario:Usuario)
  {
    
      return this.afAuth.createUserWithEmailAndPassword(usuario.correo,usuario.clave)
      .then((user)=>{    
        this.setUserData(usuario,user.user.uid);
        user.user.updateProfile({displayName: usuario.nombre});
        this.router.navigate(['/home']);
      }).catch(error=> Swal.fire({
        icon:"error",
        title:"El usuario ya esta registrado!",
        text: "Intente nuevamente"
      }));

   
    
  }

  async logout()
  {
  
    await this.afAuth.signOut();
  
  }


  setUserData(usuario : Usuario, auState:string): void{
    const path = `users/${auState}`;
    const data = {
      email: usuario.correo,
      displayName: usuario.nombre,
    };
    this.authSvc.object(path).update(data).catch(error=>console.log(error));
    
  }

 


}
