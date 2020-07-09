import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Model/Persona';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/api/v1/person";

  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.Url + "/new", persona);
  }

  deletePersona(idPerson: number) {

    return this.http.delete(this.Url + "/delete/" + idPerson);
  }

}
