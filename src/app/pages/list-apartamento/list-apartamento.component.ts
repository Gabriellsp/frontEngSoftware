import { Component, OnInit } from '@angular/core';
import { Apartamento } from '../../models/apartamento';
import { ApartamentoService } from '../../services/apartamento.service';
@Component({
  selector: 'app-list-apartamento',
  templateUrl: './list-apartamento.component.html',
  styleUrls: ['./list-apartamento.component.scss']
})
export class ListApartamentoComponent implements OnInit {
  
  message = null;
  apartamentos;
  constructor(private apartamentoService: ApartamentoService) { }

  
  ngOnInit(): void {
    this.listCasa();  
  }

  listCasa() {
    this.apartamentoService.getListApartamento().subscribe(  
      (data) => {  
        this.apartamentos = data;
        this.message = 'Lista de casas retornadas com sucesso!';  
      }  
    );  
  }
}
