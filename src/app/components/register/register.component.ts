import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Usuario } from './../../clases/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
  
})
export class RegisterComponent implements OnInit {

  registerForm=new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });

  usuario : Usuario; 
  
  constructor(private authSvc : AuthService, private router : Router, private usuarioSvc : UsuarioService)
  { 
    this.usuario = new Usuario();
  }


  
  async onRegister()  
  {
    const {email,password} = this.registerForm.value;
    this.usuario.correo = email;
    this.usuario.clave = password;

    try
    {
      const user = await this.authSvc.register(this.usuario,password);
      if(user)
      {
      
        this.usuarioSvc.Crear(this.usuario);
        this.router.navigate(['/home']);
      }
    }
    catch(error)
    {
      console.log(error);
      alert(error);
    }
    
  }
  

  ngOnInit(): void {
  }

}
