import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from './../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
    }

  )

  usuario : Usuario;

  constructor(private authSvc: AuthService, private router : Router) 
  {
    this.usuario = new Usuario();
  }



  async onLogin()
  {
    const {email,password} = this.loginForm.value;
    this.usuario.correo = email;
    try
    {
      const user = await this.authSvc.login(this.usuario,password);
      if(user)
      {
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
