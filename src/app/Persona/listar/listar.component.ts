import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Model/Persona';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(data => {
      this.personas = data;
    })
  }

  editar(idPersona: number) {
    localStorage.setItem("id", idPersona.toString());
    this.router.navigate(["edit"]);
  }

  eliminar(idPersona: number) {

    this.service.deletePersona(idPersona).subscribe(data => {
      this.personas = this.personas.filter(p => p.idPerson != idPersona);
    });

  }



}
