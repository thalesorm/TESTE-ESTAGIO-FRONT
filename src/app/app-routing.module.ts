import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnqueteListComponent } from './components/enquete-list/enquete-list.component';
import { EnqueteDetailsComponent } from './components/enquete-details/enquete-details.component';
import { AddEnqueteComponent } from './components/add-enquete/add-enquete.component';


const routes: Routes = [
  { path: '', redirectTo: 'enquetes', pathMatch: 'full' },
  { path: 'enquetes', component: EnqueteListComponent },
  { path: 'enquete/:id', component: EnqueteListComponent },
  { path: 'add', component: AddEnqueteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
