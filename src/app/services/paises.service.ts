import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../clases/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(public http : HttpClient) { 

  }

  public TraerPaises()
  {
    return this.http.get('https://restcountries.eu/rest/v2/region/americas');
  }
}
