import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotoResponse } from './model/FotoResponse';
import { FotoDTO } from './model/FotoDTO';

@Injectable({ providedIn: 'root' })
export class Servicespictures {

    constructor(private http: HttpClient) { }

    public enviarFoto(fotoDTO: FotoDTO): Observable<FotoResponse> {
        return this.http.post<FotoResponse>("http://localhost:8080/pictures", fotoDTO);
    }
}
