import { Injectable } from '@angular/core';
import { ITarjeta } from './../interface/itarjeta';

@Injectable()
export class TarjetaService {

    private primerTarjetaAComparar: ITarjeta;
    private segundaTarjetaAComparar: ITarjeta;
    public aciertos: number;

    constructor() {
        
    }

    mostrarTarjeta(tarjeta: ITarjeta) {
        if (this.isEmpty(this.primerTarjetaAComparar) && this.isEmpty(this.segundaTarjetaAComparar)) {
            this.primerTarjetaAComparar = tarjeta;
            this.primerTarjetaAComparar.visible = true;
            return;
        }
        if (this.isEmpty(this.segundaTarjetaAComparar)) {
            this.segundaTarjetaAComparar = tarjeta;
            this.segundaTarjetaAComparar.visible = true;
            this.comparar(this.primerTarjetaAComparar, this.segundaTarjetaAComparar);
        }
    }

    comparar(tarjeta1:any, tarjeta2:any) 
    {
        this.primerTarjetaAComparar = null;
        this.segundaTarjetaAComparar = null;
        if (tarjeta1.nombre === tarjeta2.nombre) 
        {
            this.aciertos++;
            console.log(this.aciertos);
        } 
        else 
        {
            setTimeout(function()
            {
                tarjeta1.visible = false;
                tarjeta2.visible = false;
            }, 1000);
        }
    }

    isEmpty(obj: any) {
        return obj === null || obj === undefined;
    }

    isUndefined(obj: object) {
        return obj === undefined;
    }

}
