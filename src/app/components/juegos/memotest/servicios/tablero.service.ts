import { Injectable } from '@angular/core';
import { ITarjeta } from './../interface/itarjeta'
import { Pais } from '../../../../clases/pais';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable(
    
)
export class TableroService {

    private NombreTarjetas = ['fa-car', 'fa-bug', 'fa-diamond', 'fa-heart', 'fa-binoculars', 'fa-apple',
    'fa-cc-visa', 'fa-internet-explorer', 'fa-star', 'fa-university', 'fa-facebook', 'fa-instagram',
    'fa-youtube', 'fa-angellist', 'fa-wifi', 'fa-tint', 'fa-life-ring', 'fa-suitcase', 'fa-futbol-o',
    'fa-motorcycle', 'fa-leaf', 'fa-eye', 'fa-coffee', 'fa-bullseye', 'fa-plane' ];


    // paises : Pais[] =  [];

    // constructor(public http : HttpClient)
    // {
        
    // }

    // public httpGetO<T>( url: string) 
    // {
    //     return this.http.get<T>('https://restcountries.eu/rest/v2/region' + url );
    // }

    //  public TraerPaises() : Observable<Pais[]>
    //  {
    //     return this.httpGetO<Pais[]>('/americas');
    //  }
  
     
    

    mezclar(tarjetas: ITarjeta[]) {
        const newArr = tarjetas.slice();
        for (let i = newArr.length; i; i -= 1) {
            const j = Math.floor(Math.random() * i);
            const x = newArr[i - 1];
            newArr[i - 1] = newArr[j];
            newArr[j] = x;
        }
        return newArr;
    }

 
    
    

    getTarjetas(cantidadTarjetas:any) {
        let tarjetas = this.NombreTarjetas.slice(0, cantidadTarjetas).map(t => ({
            nombre: t,
            visible: false
        }));
        tarjetas = tarjetas.concat(tarjetas).map((t, i) => ({
            _id: i,
            nombre: t.nombre,
            visible: t.visible,
        }));
        return this.mezclar(tarjetas);
    }
}
