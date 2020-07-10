import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Model/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  persona: Persona = new Persona();

  guardar() {

    this.service.createPersona(this.persona).subscribe(data => {
      alert("Agregado Correctamente");
      this.router.navigate(["listar"]);
    })

  }

}
