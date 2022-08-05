import { Component, OnInit } from '@angular/core';
import { TipoItemService } from './../../services/tipo-item.service';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoItem } from 'src/app/models/tipo-item.model';


@Component({
  selector: 'app-delete-tipo-item',
  templateUrl: './delete-tipo-item.component.html',
  styleUrls: ['./delete-tipo-item.component.css']
})
export class DeleteTipoItemComponent implements OnInit {

  tipoItems?: TipoItem[];
  currentTipoItem: TipoItem = {};
  tipo = '';
  descricao = '';

  constructor(private tipoItemService:TipoItemService, private route: ActivatedRoute, private router: Router) {
    if(confirm("Deseja deletar esse registro? ")) {
      var id = this.route.snapshot.params["id"];
      this.tipoItemService.delete(id).subscribe({
        next: (dataDel) => {

        },
        error: (e) => console.error(e)
      });

      //this.router.navigate(['/tipoItemList']);
    }
    this.tipoItemService.getAll().subscribe({
      next: (data) => {
        this.tipoItems = data;
      },
      error: (e) => console.error(e)
    });
    this.router.navigate(['/tipoItemList']);
  }

  ngOnInit(): void {

  }

}
