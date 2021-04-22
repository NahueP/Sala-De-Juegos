import { Component, OnInit, Input } from '@angular/core';
import { Piece } from './../../../../services/tateti.service';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {


  @Input() piece: Piece = Piece.EMPTY;
  @Input() row: number;
  @Input() col: number;
  get color(): string {
    switch (this.piece) {
      case Piece.X:
        return 'x';
      case Piece.O:
        return 'o';
      default:
        return '';
    }
  }


  constructor() { }

  

  ngOnInit(): void {
  }

}
