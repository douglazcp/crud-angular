import { Component, OnInit } from '@angular/core';
import { TipoItemService } from './../../services/tipo-item.service';
import { ActivatedRoute, Router } from '@angular/router';


import { TipoItem } from 'src/app/models/tipo-item.model';
@Component({
  selector: 'app-add-tipo-item',
  templateUrl: './add-tipo-item.component.html',
  styleUrls: ['./add-tipo-item.component.css']
})
export class AddTipoItemComponent implements OnInit {
  tipoItem: TipoItem = {
    descricao: '',
    tipo: ''
  };
  submitted = false;

  constructor(private tipoItemService:TipoItemService, private route: ActivatedRoute, private router: Router) {
    var id = this.route.snapshot.params["id"];
    if(id != null && id != undefined){
      this.tipoItemService.get(id).subscribe({
        next: (res) => {
          this.tipoItem = res;
          this.submitted = false;
        },
        error: (e) => console.error(e)
      });
    }
  }

  ngOnInit(): void {
  }

  saveTipoItem():void{
    var confirmSave = true;
    if(this.tipoItem.descricao == "" || this.tipoItem.tipo == "" || this.tipoItem.descricao?.trim().length == 0 || this.tipoItem.tipo?.trim().length == 0){
      alert("Campo(s) obrigatório(s) não preenchidos.");
      return;
    }

    if(this.tipoItem.id != null){
      confirmSave = confirm("Deseja salvar as alterações realizadas?");
    }else{
      confirmSave = confirm("Deseja salvar esse registro?");
    }
    if(!confirmSave){
      return;
    }
    const data = {
      id: this.tipoItem.id,
      descricao: this.tipoItem.descricao,
      tipo: this.tipoItem.tipo
    };
    if(data.id != null && data.id != undefined){
      this.tipoItemService.update(data).subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    }else{
      this.tipoItemService.create(data).subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    }

    this.router.navigate(['/tipoItemList']);

  }

  clearTipoItem():void{
    this.tipoItem.descricao = "",
    this.tipoItem.tipo = "";
  };

  newTipoItem():void{

  }

}
