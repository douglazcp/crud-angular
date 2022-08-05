import { Component, OnInit } from '@angular/core';

import { TipoItem } from 'src/app/models/tipo-item.model';
import { TipoItemService } from 'src/app/services/tipo-item.service';


@Component({
  selector: 'app-tipo-item-list',
  templateUrl: './tipo-item-list.component.html',
  styleUrls: ['./tipo-item-list.component.css']
})
export class TipoItemListComponent implements OnInit {

  tipoItems?: TipoItem[];
  currentTipoItem: TipoItem = {};
  tipo = '';
  descricao = '';

  constructor(private tipoItemService: TipoItemService) { }

  ngOnInit(): void {
    this.listTipoItems();

    /*
      ---- teste local ----
    var tipoItemTmp: TipoItem = {}
    this.tipoItems = [];

    tipoItemTmp.id = 1
    tipoItemTmp.descricao = "Teste";
    tipoItemTmp.tipo = "Documentos";
    this.tipoItems.push(tipoItemTmp);
    tipoItemTmp.id = 2
    tipoItemTmp.descricao = "Teste2";
    tipoItemTmp.tipo = "Outros";
    this.tipoItems.push(tipoItemTmp);
    */
  }

  listTipoItems(): void {
    this.tipoItemService.getAll()
      .subscribe({
        next: (data) => {
          this.tipoItems = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.listTipoItems();
    this.currentTipoItem = {};
    this.tipo = '';
    this.descricao = '';
  }

  editTipoItem(tipoItem: TipoItem): void {
    this.tipoItemService.get(tipoItem.id)
      .subscribe({
        next: (data) => {
          this.tipoItems?.push(data);
        },
        error: (e) => console.error(e)
      });;

  }

  searchTipoItem(): void {
    this.currentTipoItem = {};
    this.tipoItemService.findByDescriptionOrTypeDoc(this.descricao, this.tipo)
      .subscribe({
        next: (data) => {
          if (data == null) {
            alert("Nenhum registro encontrado para esta pesquisa");
          } else {
            this.tipoItems = data;
          }
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  clear(): void {
    this.currentTipoItem = {};
    this.tipoItemService.getAll()
      .subscribe({
        next: (data) => {
          this.tipoItems = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
