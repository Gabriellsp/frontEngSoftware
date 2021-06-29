import { Component, OnInit } from '@angular/core';
import { Casa } from '../../models/casa';
import { CasaService } from '../../services/casa.service';

@Component({
  selector: 'app-list-casa',
  templateUrl: './list-casa.component.html',
  styleUrls: ['./list-casa.component.scss']
})
export class ListCasaComponent implements OnInit {
  message = null;
  casas;
  constructor(private casaService: CasaService) { }

  
  ngOnInit(): void {
    this.listCasa();  
  }

  listCasa() {
    this.casaService.getListCasa().subscribe(  
      (data) => {  
        this.casas = data;
        this.message = 'Lista de casas retornadas com sucesso!';  
      }  
    );  
  }
}
