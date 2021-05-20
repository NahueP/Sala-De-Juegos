import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../../clases/encuesta';
import { EncuestaService } from '../../services/encuesta.service';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import  Swal  from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  providers: [AuthService]
})
export class EncuestaComponent implements OnInit {

  public formGroup!: FormGroup;
  usuario: Usuario = new Usuario();
  encuesta: Encuesta = new Encuesta();

  constructor(
    private fb:FormBuilder,
    private authSvc: AuthService,
    private encuestSvc: EncuestaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required]],
      'apellido': ['',Validators.required],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'telefono': ['',[Validators.required,Validators.min(1111111111),Validators.max(9999999999)]],
      'ppt': ['',],
      'memotest': ['',],
      'tateti': ['',],
      'quince': ['',],
      'ninguno': ['',],
      'cambios': ['',],
      'recomienda': ['',],
      'calificacion':['',]
   
    });



    this.formGroup.get("ninguno").valueChanges.subscribe(val=>{
      if(val){
        this.formGroup.get("ppt").disable();
        this.formGroup.get("memotest").disable();
        this.formGroup.get("tateti").disable();
        this.formGroup.get("quince").disable();
      }
      else{
        this.formGroup.get("ppt").enable();
        this.formGroup.get("memotest").enable();
        this.formGroup.get("tateti").enable();
        this.formGroup.get("quince").enable();
      }
     
    });
  }
  mostrarMensaje(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Tu encuesta ha sido enviada!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  enviarEncuesta(){
    let fecha : Date; 

     this.authSvc.getCurrentUser().subscribe(user=>{
       this.usuario.correo = user.email;
       this.usuario.nombre = user.displayName;

       this.encuesta = this.formGroup.getRawValue();
       this.encuesta.usuario = this.usuario;
       this.encuesta.fecha = this.usuario.getTimeStamp();
       this.encuestSvc.Crear(this.encuesta);
       this.mostrarMensaje();
       this.router.navigate(["/home"]);
     })

  }

}
