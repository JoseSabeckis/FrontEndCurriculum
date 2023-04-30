import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdExperienciaComponent } from './components/experiencia/modify/upd-experiencia/upd-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/editar/edit-experiencia/edit-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/new-edu/nueva-educacion/nueva-educacion.component';
import { EditEducacionComponent } from './components/educacion/editar/edit-educacion/edit-educacion.component';
import { NewHardsoftComponent } from './components/hardsoft/new-hardsoft/new-hardsoft/new-hardsoft.component';
import { EditHardComponent } from './components/hardsoft/edit-hard/edit-hard/edit-hard.component';
import { EditAcercaComponent } from './components/acerca-de/edit/edit-acerca/edit-acerca.component';

const routes: Routes = [ 
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexperiencia', component: UpdExperienciaComponent},
  {path:'editarexperiencia/:id', component: EditExperienciaComponent},
  {path:'nuevaeducacion', component: NuevaEducacionComponent},
  {path:'editareducacion/:id', component: EditEducacionComponent},
  {path:'nuevahardysoftskill', component: NewHardsoftComponent},
  {path:'editarhardysoftskill/:id', component: EditHardComponent},
  {path:'editaracercademi', component: EditAcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
