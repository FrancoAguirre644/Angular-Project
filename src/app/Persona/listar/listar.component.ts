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
  constructor(private Service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.Service.getPersonas().subscribe(data => {
      this.personas = data;
    })
  }

}
