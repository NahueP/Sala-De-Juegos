import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Usuario } from './../../clases/usuario';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
  
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group(
    {
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required,Validators.maxLength(12),Validators.minLength(3)]],
    }

  )

  get email()
  {
    return this.registerForm.get('email');
  }
  get password()
  {
    return this.registerForm.get("password");
  }
  get nombre()
  {
    return this.registerForm.get("nombre");
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Ingrese su correo' },
      { type: 'pattern', message: 'Por favor ingrese un correo valido' }
    ],
    password: [
      { type: 'required', message: 'Ingrese su contraseña' },
      { type: 'minlength', message: 'La contraseña debe tener 6 caracteres como minimo'}
    ],
    nombre: [
      { type: 'required', message: 'Ingrese su nombre de usuario' },
      { type: 'maxlength', message: 'El nombre no puede tener mas de 12 caracteres'},
      { type: 'minlength', message: 'El nombre debe tener 3 caracteres como minimo'}
    ]
  };

  submit()
  {
    console.log(this.registerForm.value);
  }

  usuario : Usuario; 


  constructor(private authSvc : AuthService,private formBuilder:FormBuilder, private router : Router)
  { 
    this.usuario = new Usuario();
  }



  
  async onRegister()  
  {
    const {nombre,email,password} = this.registerForm.value;
    
    this.usuario.correo = email;
    this.usuario.clave = password;
    this.usuario.nombre = nombre;
    
    
    try
    {
      const user = await this.authSvc.register(this.usuario);
    
    
    }
    catch(error)
    {
      console.log(error);
      
    }
    
  }
  

  ngOnInit(): void {
  }

}
