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

  jugarPPT()
  {
    location.assign('./juegos/piedra-papel-tijera');
  }

  jugarMemotest()
  {
    location.assign('./juegos/memotest');
  }

  ngOnInit(): void {
  }

}
