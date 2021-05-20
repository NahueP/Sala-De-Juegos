import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor() { }

  jugarTateti()
  {
    location.assign('./juegos/tateti');
  }

  listadoTateti()
  {
    location.assign('./listados/listado-tateti');
  }

  jugarPPT()
  {
    location.assign('./juegos/piedra-papel-tijera');
  }

  listadoPpt()
  {
    location.assign('./listados/listado-ppt');
  }

  jugarMemotest()
  {
    location.assign('./juegos/memotest');
  }

  listadoMemotest()
  {
    location.assign('./listados/listado-memotest');
  }

  jugarQuince()
  {
    location.assign('./juegos/quince');
  }

  listadoQuince()
  {
    location.assign('./listados/listado-quince');
  }

  ngOnInit(): void {
  }

}
