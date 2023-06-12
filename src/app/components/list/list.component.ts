import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  esVistaListado: Boolean = true;
  esVistaGrid: Boolean = false;
  listaImagenes: Card[] = [];
  isLoading: Boolean = true;
  title: string = 'Listado de entradas';

  constructor(private listService: ListService) {}
  async ngOnInit() {
    await this.delay();
    this.listService.getAllList().subscribe((imagenes: Card[]) => {
      this.listaImagenes = imagenes;
      this.isLoading = false;
    });
  }

  esListado() {
    this.esVistaListado = true;
    this.esVistaGrid = false;
    this.title = 'Listado de entradas';
  }
  esGrid() {
    this.esVistaListado = false;
    this.esVistaGrid = true;
    this.title = 'Grid de entradas';
  }

  delay() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
