import { TipoItem } from './../../models/tipo-item.model';
import { TipoItemService } from 'src/app/services/tipo-item.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipo-item-details',
  templateUrl: './tipo-item-details.component.html',
  styleUrls: ['./tipo-item-details.component.css']
})
export class TipoItemDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentTipoItem : TipoItem = {
    descricao: ''
  }
  message = '';
  constructor(
    private tipoItemService: TipoItemService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTipoItem(this.route.snapshot.params["id"]);
    }
  }

  getTipoItem(id: string): void {
    this.tipoItemService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTipoItem = data;
        },
        error: (e) => console.error(e)
      });
  }

  updateTipoItem(): void {
    this.message = '';
    this.tipoItemService.update(this.currentTipoItem)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'Tipo item atualizado!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTipoItem(): void {
    this.tipoItemService.delete(this.currentTipoItem.id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/tipoItems']);
        },
        error: (e) => console.error(e)
      });
  }
}
