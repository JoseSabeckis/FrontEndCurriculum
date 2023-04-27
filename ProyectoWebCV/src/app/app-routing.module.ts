import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdExperienciaComponent } from './components/experiencia/modify/upd-experiencia/upd-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/editar/edit-experiencia/edit-experiencia.component';

const routes: Routes = [ 
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexperiencia', component: UpdExperienciaComponent},
  {path:'editarexperiencia/:id', component: EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
