import { DeleteTipoItemComponent } from './components/delete-tipo-item/delete-tipo-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TipoItemListComponent } from './components/tipo-item-list/tipo-item-list.component';
import { TipoItemDetailsComponent } from './components/tipo-item-details/tipo-item-details.component';
import { AddTipoItemComponent } from './components/add-tipo-item/add-tipo-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'tipoItemList', pathMatch: 'full' },
  { path: 'tipoItemList', component: TipoItemListComponent },
  { path: 'tipoItemDetails/:id', component: TipoItemDetailsComponent },
  { path: 'add', component: AddTipoItemComponent },
  { path: 'cancelar', component: AddTipoItemComponent },
  { path: 'edit/:id', component: AddTipoItemComponent },
  { path: 'delete/:id', component: DeleteTipoItemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
