import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Model/Persona';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.editar();
  }

  persona: Persona = new Persona();



  editar() {
    let id = localStorage.getItem("id");
    this.service.getPersona(+id).subscribe(data => {
      this.persona = data;
    })
  }

  actualizar(persona: Persona) {
    this.service.updatePersona(persona).subscribe(data => {
      this.persona = data;
      alert("se agrego con exito");
      this.router.navigate(["listar"]);
    })
  }

}
