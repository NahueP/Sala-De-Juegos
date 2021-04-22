import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Usuario } from './../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group(
    {
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }

  )
  
  emailAcceso: string='';
  passAcceso: string='';

  get email()
  {
    return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get("password");
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Ingrese su correo' },
      { type: 'pattern', message: 'Por favor ingrese un correo valido' }
    ],
    password: [
      { type: 'required', message: 'Ingrese su contraseña' }
    ]
  };

  submit()
  {
    console.log(this.loginForm.value);
  }


  usuario : Usuario;

  constructor(private authSvc: AuthService, private formBuilder:FormBuilder,private router : Router) 
  {
    this.usuario = new Usuario();
  }



  async onLogin()
  {
    const {email,password} = this.loginForm.value;
    this.usuario.correo = email;
    this.usuario.clave = password;
    
    try
    {
      const user = await this.authSvc.login(this.usuario);

      if(user)
      {
        this.router.navigate(['/home']);
      }
      
    }
    catch(error)
    {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Usuario Inexistente!',
        text: 'Es posible que los datos no sean correctos, intente nuevamente',
      });
    }
    
  }

  accesoRapidoUno(){
    this.emailAcceso = "usuario@test.com";
    this.passAcceso = "123456";

  }
 
  

  ngOnInit(): void {
  }

}
